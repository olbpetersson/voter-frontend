export const registerVote = (newState) => {
    //Should be a lambda function that calculates totalt amount of registrations
    //and sets the percentage as well as the nr of votes for each
    var stateTobe = JSON.parse(newState);
    var votesForA = stateTobe.votingOptionA.nrOfVotes;
    var votesForB = stateTobe.votingOptionB.nrOfVotes;
    var percent = votesForA + votesForB !== 0 ? (votesForA / (votesForA + votesForB)) * 100 : 50;
    console.log('Reducing state from this state, the percentage was set to', stateTobe, percent);

    return {
        type: 'UPDATE_STATE',
        closed: votesForA+votesForB >= stateTobe.closeAfter ,
        value: percent
    }
};