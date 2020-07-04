const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const router = require('./routes');

const app = express();
const PORT = 3001;

global.database = {
    users: [
        {
            id: '0',
            name: 'John Doe',
            email: 'john@gmail.com',
            password: 'password',
            entries: 0,
            joined: new Date(),
        },
        {
            id: '1',
            name: 'Doe John',
            email: 'doe@gmail.com',
            password: 'qwerty',
            entries: 0,
            joined: new Date(),
        }
    ]
}

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(helmet());

app.use('/',router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});