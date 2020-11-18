const register = async (db, name, email, hash) => {
    const user = {
        name,
        email,
        joined: new Date()
    };
    const login = {
        email,
        hash,
    }
    try {
        const registeredUser = await db.transaction(async (trx) => {
            try {
                const regUser = await trx.insert(user).into('users').returning('*');
                await trx.insert(login).into('login').returning('*');
                await trx.commit;
                return regUser[0];
            } catch (err) {
                trx.rollback;
                throw err;
            }
        });
        return { status: 201, response: registeredUser };
    } catch (err) {
        console.error(err);
        return { status: 400, response: 'Email already registered' };
    }
}

module.exports = register;