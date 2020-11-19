const signin = require('./services/signin');
const register = require('./services/register');
const getProfile = require('./services/getProfile');
const incrementEntries = require('./services/incrementEntries');
const predictFace = require('./services/predictFace');

const signinController = async (option, req, res) => {
    const { db, bcrypt, telemetryClient } = option;
    let { email, password } = req.body;
    email = email.toLowerCase();
    if (!email || !password) {
        res.status(400).json('Missing required parameters');
        return;
    }
    const { status, response } = await signin(db, bcrypt, telemetryClient, email, password);
    res.status(status).json(response);
    return;
}

const registerController = async (option, req, res) => {
    const { db, bcrypt, telemetryClient } = option;
    let { name, email, password } = req.body;
    email = email.toLowerCase();
    if (!name || !email || !password) {
        res.status(400).json('Missing required parameters');
        return;
    }
    const hash = hashPassword(password, bcrypt);
    const { status, response } = await register(db, telemetryClient, name, email, hash);
    res.status(status).json(response);
    return;
}

const profileController = async (option, req, res) => {
    const { db, telemetryClient } = option;
    const id = req.params.id;
    const { status, response } = await getProfile(db, telemetryClient, id);
    res.status(status).json(response);
}

const imageController = async (option, req, res) => {
    const { db, telemetryClient } = option;
    const { id } = req.body;
    let { status, response } = await getProfile(db, telemetryClient, id);
    if (status === 200) {
        const r = await incrementEntries(db, telemetryClient, id);
        status = r.status;
        response = r.response;
    }
    res.status(status).json(response);
}

const predictFaceController = async (option, req, res) => {
    const { clarifai, model, telemetryClient } = option;
    const { image_url } = req.body;
    const { status, response } = await predictFace(clarifai, model, telemetryClient, image_url);
    res.status(status).json(response);
}

const hashPassword = (password, bcrypt) => {
    return bcrypt.hashSync(password);
}

module.exports = {
    signinController,
    registerController,
    profileController,
    imageController,
    predictFaceController,
}