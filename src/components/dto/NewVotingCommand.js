export default class NewVotingCommand {

    constructor(name, description, optionA, optionB, token) {
        this.type = "NewVotingCommand";
        this.payload = {
            votingName: name,
            description: description,
            votingOptionA: optionA,
            votingOptionB: optionB,
            token: token
        }
    }

}
