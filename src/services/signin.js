const signin = async (db, bcrypt, email, password) => {
    try {
        const matchedUser = await db('login').where('email', email).returning('*');
        if (matchedUser.length) {
            const { hash } = matchedUser[0];
            const isValid = bcrypt.compareSync(password, hash);
            if (isValid) {
                const user = await db('users').where('email', email).returning('*');
                return { status: 200, response: user[0] };
            } else {
                return { status: 401, response: 'UNAUTHORISED' };
            }
        } else {
            return { status: 400, response: 'User not found' }
        }
    } catch (err) {
        console.error(err);
        telemetryClient.trackException({exception: err});
        return { status: 500, response: err }
    }
}

module.exports = signin;