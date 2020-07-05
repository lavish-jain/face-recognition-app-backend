const bcrypt = require('bcrypt-nodejs');

const signin = async (email, password) => {
    try {
        const matchedUser = await dbConnection('login').where('email', email).returning('*');
        if (matchedUser.length) {
            const { hash } = matchedUser[0];
            const isValid = bcrypt.compareSync(password, hash);
            if (isValid) {
                const user = await dbConnection('users').where('email', email).returning('*');
                return { status: 200, response: user[0] };
            } else {
                return { status: 401, response: 'UNAUTHORISED' };
            }
        } else {
            return { status: 400, response: 'User not found' }
        }
    } catch (err) {
        return { status: 500, response: 'Error signing in' }
    }
}

module.exports = signin;