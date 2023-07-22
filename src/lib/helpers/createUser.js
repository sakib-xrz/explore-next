const createUser = (user) => {
    const users = localStorage.getItem("users");

    if (users) {
        const userData = JSON.parse(users);

        const existingUser = userData.find(
            (existingUser) => user.email === existingUser.email
        );

        if (existingUser) {
            return "User already exists";
        } else {
            userData.push(user);
            localStorage.setItem("users", JSON.stringify(userData));

            const loginUser = {
                name: user.name,
                email: user.email,
                password: user.password,
            };
            localStorage.setItem("currentUser", JSON.stringify(loginUser));

            return "User created successfully";
        }
    } else {
        const users = [user];
        localStorage.setItem("users", JSON.stringify(users));

        const loginUser = {
            name: user.name,
            email: user.email,
            password: user.password,
        };
        localStorage.setItem("currentUser", JSON.stringify(loginUser));

        return "User created successfully";
    }
};

export default createUser;
