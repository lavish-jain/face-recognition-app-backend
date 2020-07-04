const increamentEntries = (user) => {
    user.entries++;
    return {status: 200, response: user};
}

module.exports = increamentEntries;