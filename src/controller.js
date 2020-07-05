const bcrypt = require('bcrypt-nodejs');
const signin = require('./services/signin');
const register = require('./services/register');
const getProfile = require('./services/getProfile');
const incrementEntries = require('./services/incrementEntries');

const signinController = async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        res.status(400).json('Missing required parameters');
        return;
    }
    const { status, response } = await signin(email, password);
    res.status(status).json(response);
    return;
}

const registerController = async (req, res) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
        res.status(400).json('Missing required parameters');
        return;
    }
    const hash = hashPassword(password);
    const { status, response } = await register(name, email, hash);
    res.status(status).json(response);
    return;
}

const profileController = async (req, res) => {
    const id = req.params.id;
    const { status, response } = await getProfile(id);
    res.status(status).json(response);
}

const imageController = async (req, res) => {
    const { id } = req.body;
    let { status, response } = await getProfile(id);
    if (status === 200) {
        const r = await incrementEntries(id);
        status = r.status;
        response = r.response;
    }
    res.status(status).json(response);
}

const hashPassword = password => {
    return bcrypt.hashSync(password);
}

module.exports = {
    signinController,
    registerController,
    profileController,
    imageController,
}