export default (state = NaN, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            console.log(JSON.stringify(action))
            return action.username;
        default:
            return state
    }
};

