const register = (name, email, password) => {
    const alreadyExists = database.users.filter(user => user.email === email);
    if(alreadyExists.length !== 0) {
        return {status: 400, response: 'Email already registered'}
    }
    const user = {
        id: '11',
        name,
        email,
        password,
        entries: 0,
        joined: new Date()
    };
    database.users.push(user);
    return {status: 201, response: user};
}

module.exports = register;