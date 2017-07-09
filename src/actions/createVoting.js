export const requestCreateVoting = (newVotingDto) => {
    console.log("NewVotingRequest", newVotingDto);
    return {
        type: 'NewVotingCommand',
        newVotingDto: newVotingDto
    }
};

export const createVotingReceived = (json) => {
    console.log("NewVotingReceived", json);
    return {
        type: 'NewVotingCommand',
        json: json
    }
};