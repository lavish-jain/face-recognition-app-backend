const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    res.json(database.users);
})

router.post('/signin', controller.signinController);
router.post('/register', controller.registerController);
router.get('/profile/:id', controller.profileController);

module.exports = router;