const loginUser = (credentials) => {
    const users = localStorage.getItem("users");

    if (users) {
        const userData = JSON.parse(users);

        const loginUser = userData.find(
            (user) =>
                user.email === credentials.email &&
                user.password === credentials.password
        );

        if (loginUser) {
            localStorage.setItem("loginUser", JSON.stringify(credentials));
            return "Login successful";
        } else {
            return "Invalid email or password";
        }
    } else {
        return "No users found. Please sign up first.";
    }
};

export default loginUser;
