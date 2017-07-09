export default class VoteStandingsCommand {

    constructor(name) {
        this.type = "VoteStandingsCommand";
        this.payload = {
            votingName: name,
        }
    }

}
