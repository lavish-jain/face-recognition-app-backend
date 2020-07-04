const signin = require('./services/signin');
const register = require('./services/register');
const getProfile = require('./services/getProfile');

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

const profileController = (req, res) => {
    const id = req.params.id;
    const {status, response} = getProfile(id);
    res.status(status).json(response);
}

module.exports = {
    signinController,
    registerController,
    profileController,
}