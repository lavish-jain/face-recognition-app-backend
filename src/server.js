const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');
const Clarifai = require('clarifai');

const router = require('./routes');

try {
    const app = express();
    const PORT = process.env.PORT || 3001;

    const clarifai = new Clarifai.App({ apiKey: process.env.API_KEY })
    const model = Clarifai.FACE_DETECT_MODEL;

    const db = knex({
        client: 'pg',
        connection: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cors());
    app.use(helmet());

    const options = {
        db,
        bcrypt,
        clarifai,
        model,
    }
    app.use('/', router(options));

    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
} catch(err) {
    console.log(err);
}