export default class RegisterVoteCommandDto {

    constructor(name, option) {
        this.type = "RegisterVoteCommand";
        this.payload = {
            votingName: name,
            votingOption: option
        }
    }

}
