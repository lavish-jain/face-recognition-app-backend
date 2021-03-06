const incrementEntries = async (db, id) => {
    try {
        const user = await db('users').where('id', id).increment('entries', 1).returning('*');
        return { status: 200, response: user[0] };
    } catch (err) {
        console.error(err);
        return { status: 500, response: err }
    }
}

module.exports = incrementEntries;