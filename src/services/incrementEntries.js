const incrementEntries = async (db, id) => {
    try {
        const user = await db('users').where('id', id).increment('entries', 1).returning('*');
        return { status: 200, response: user[0] };
    } catch (err) {
        return { status: 500, response: 'Error incrementing' }
    }
}

module.exports = incrementEntries;