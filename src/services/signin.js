const signin = (email, password) => {
    const matchedEntry = database.users.filter(user => user.email === email && user.password === password);
    if (matchedEntry.length === 1) {
        return {status: 200, response:'SUCCESS'};
    } else {
        return {status: 401, response:'FAILURE'};
    }
}

module.exports = signin;