const signin = require('./services/signin');
const register = require('./services/register');

const signinController = (req, res) => {
    if(!req.body.email || !req.body.password) {
        res.status(400).json('Missing required parameters');
        return;
    }
    const {status, response} = signin(req.body.email, req.body.password);
    res.status(status).json(response);
    return;
}

const registerController = (req, res) => {
    if(!req.body.name || !req.body.email || !req.body.password) {
        res.status(400).json('Missing required parameters');
        return;
    }
    const {status, response} = register(req.body.name, req.body.email, req.body.password);
    res.status(status).json(response);
    return;
}

module.exports = {
    signinController,
    registerController,
}