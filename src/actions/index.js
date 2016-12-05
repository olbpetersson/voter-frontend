export const registerVote = (int) => {
    return {
        type: 'UPDATE_STATE',
        value: int
    }
};