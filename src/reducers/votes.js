
export default (state = 50, action) => {
    switch (action.type) {
        case 'UPDATE_STATE':
            console.log("GOT AN ACTION", JSON.stringify(action));
            return action.value;
        default:
            return state
    }
};

