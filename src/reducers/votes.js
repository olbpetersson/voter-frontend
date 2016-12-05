
export default (state = 50, action) => {
    switch (action.type) {
        case 'UPDATE_STATE':
            console.log(JSON.stringify(action))
            return action.value;
        default:
            return state
    }
};

