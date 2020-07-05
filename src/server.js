const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const knex = require('knex');

const router = require('./routes');

const app = express();
const PORT = 3001;

global.dbConnection = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'your_username',
        password: 'your_password',
        database: 'face-recognition-app-db'
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});