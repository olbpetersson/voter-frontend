export const registerVote = (newState) => {
    //Should be a lambda function that calculates totalt amount of registrations
    //and sets the percentage as well as the nr of votes for each
    var apa = JSON.parse(newState);
    var votesForA = apa.votingOptionA.nrOfVotes;
    var votesForB = apa.votingOptionB.nrOfVotes;
    var percent = 0;
    if(votesForA + votesForB !== 0) {
        percent = (votesForA / (votesForA + votesForB)) * 100;
    } else {
        percent = 50;
    }
    return {
        type: 'UPDATE_STATE',
        value: percent
    }
};