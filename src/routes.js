const express = require('express');
const controller = require('./controller');
const appInsights = require('applicationinsights');


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
    // Integrating knex with app insights    
    const originalQuery = option.db.client.query;
    const localKnex = option.db.withUserParams();
    localKnex.client.query = appInsights.wrapWithCorrelationContext(originalQuery);
    option.db = localKnex;
    func(option, req, res);
}

module.exports = routes;