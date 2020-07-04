const database = {
    users: [
        {
            id: '0',
            name: 'John Doe',
            email: 'john@gmail.com',
            password: 'password',
            entries: 0,
            joined: new Date(),
        },
        {
            id: '1',
            name: 'Doe John',
            email: 'doe@gmail.com',
            password: 'qwerty',
            entries: 0,
            joined: new Date(),
        }
    ]
}

const signin = (body) => {
    const { email, password } = body;
    const matchedEntry = database.users.filter(user => user.email === email && user.password === password);
    if (matchedEntry.length === 1) {
        return {status: 200, response:'SUCCESS'};
    } else {
        return {status: 401, response:'FAILURE'};
    }
}

module.exports = signin;