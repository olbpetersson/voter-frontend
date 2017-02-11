export const loginUser = (user) => {
    console.log("User", user);
    return {
        type: 'LOGIN_USER',
        username: user.username
    }
};