export default class NewVotingCommand {

    constructor(name, description, optionA, optionB, closeAfter, token) {
        this.type = "NewVotingCommand";
        this.payload = {
            votingName: name,
            description: description,
            votingOptionA: optionA,
            votingOptionB: optionB,
            closeAfter: closeAfter,
            token: token
        }
    }

}
