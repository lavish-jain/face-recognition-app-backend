const getProfile = id => {
    const user = database.users.filter(user => user.id === id);
    if(user.length === 0) {
        return {status: 404, response: 'User not found'};
    }
    return {status: 200, response: user[0]};
}

module.exports = getProfile;