const getProfile = async (db, id) => {
    try {
        const user = await db('users').where('id', id);
        if (user.length) {
            return { status: 200, response: user[0] };
        }
        return { status: 404, response: 'User not found' }
    } catch (err) {
        return { status: 500, response: 'Error Fetching Profile' }
    }
}

module.exports = getProfile;