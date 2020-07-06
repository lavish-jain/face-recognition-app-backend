const express = require('express');
const controller = require('./controller');



const routes = option => {
    const router = express.Router();
    router.post('/signin', wrapperFunc(option, controller.signinController));
    router.post('/register', wrapperFunc(option, controller.registerController));
    router.get('/profile/:id', wrapperFunc(option, controller.profileController));
    router.put('/image', wrapperFunc(option, controller.imageController));
    router.post('/predictface', wrapperFunc(option, controller.predictFaceController));
    return router;
}

const wrapperFunc = (option, func) => (req, res) => {
    func(option, req, res);
}

module.exports = routes;