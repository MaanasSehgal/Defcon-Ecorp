const authenticate = (request, response) => {
    const {username, password} = request.body;

    // Sample users data, replace it with a secure database
    const users = [
        {
            username: "user1",
            password: "user1-password",
        },
        {
            username: "user2",
            password: "user2-password",
        },
    ];

    const foundUser = users.find((user) => user.username === username);
    if (foundUser && foundUser.password === password) {
        response.status(200).json({message: "Logged in successfully"});
    } else {
        response.status(401).json({message: "Invalid credentials"});
    }
};

module.exports = authenticate;
