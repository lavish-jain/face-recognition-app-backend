const signin = require('./services/signin');

const signinController = (req, res) => {
    if(!req.body.email || !req.body.password) {
        res.status(400).json('Missing required parameters');
        return;
    }
    const {status, response} = signin(req.body);
    res.status(status).json(response);
};

module.exports = {
    signinController,
}