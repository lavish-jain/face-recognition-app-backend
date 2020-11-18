const getProfile = async (db, id) => {
    try {
        const user = await db('users').where('id', id);
        if (user.length) {
            return { status: 200, response: user[0] };
        }
        return { status: 404, response: 'User not found' }
    } catch (err) {
        console.error(err);
        return { status: 500, response: err }
    }
}

module.exports = getProfile;