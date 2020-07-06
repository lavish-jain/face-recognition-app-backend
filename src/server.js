const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');
const Clarifai = require('clarifai');

const router = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

const clarifai = new Clarifai.App({ apiKey: 'api_key' })
const model = Clarifai.FACE_DETECT_MODEL;

db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_URL,
        ssl: true,
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