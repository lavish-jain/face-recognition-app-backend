const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Home Page');
})

router.post('/signin', controller.signinController)

module.exports = router;