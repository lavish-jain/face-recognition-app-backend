const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const router = require('./routes');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(helmet());

app.use('/',router);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});