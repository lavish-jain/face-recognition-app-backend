const signin = (email, password) => {
    const matchedEntry = database.users.filter(user => user.email === email && user.password === password);
    if (matchedEntry.length === 1) {
        return {status: 200, response: matchedEntry[0]};
    } else {
        return {status: 401, response:'UNAUTHORISED'};
    }
}

module.exports = signin;