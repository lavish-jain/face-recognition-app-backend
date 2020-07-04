const signin = require('./services/signin');
const register = require('./services/register');
const getProfile = require('./services/getProfile');
const increamentEntries = require('./services/increamentEntries');

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

const imageController = (req, res) => {
    const {id} = req.body;
    let {status, response} = getProfile(id);
    if(status === 200) {
        const r = increamentEntries(response);
        status = r.status;
        response = r.response;
    }
    res.status(status).json(response);
}

module.exports = {
    signinController,
    registerController,
    profileController,
    imageController,
}