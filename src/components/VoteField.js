import React, {Component, PropTypes} from "react";
import {Col, Row, Grid} from "react-bootstrap";
import RegisterVoteCommandDto from "./dto/RegisterVoteCommandDto";
import NewVotingCommand from "./dto/NewVotingCommand";
import VoteOptionButton from "./VoteOptionButton";
import VoteProgressBar from "./VoteProgressBar";

var component;

class VoteField extends Component {

    constructor(props) {
        super(props);
        console.log("got a lot of props: " + JSON.stringify(props));
        console.log("this " + JSON.stringify(this.props))
        component = this;
        this.setupSocket = this.setupSocket.bind(this);
        this.setState = this.setState.bind(this);
        this.submit = this.submit.bind(this);
        this.fail = this.fail.bind(this);
        this.state = {name: "apa", description: "Vad föredrar du?", optionA: "Downvote", optionB: "Upvote", value: 50, loading: true};
        this.webSocket = undefined;
        this.setupSocket("apa");

    }

    submit(votingOption) {
        console.log("Submitting");
        var registerVoteCommand = new RegisterVoteCommandDto(this.state.name,
            votingOption
        );

        console.log("Sending a register vote command" + JSON.stringify(registerVoteCommand));

        component.webSocket.send(JSON.stringify(registerVoteCommand));
    }

    fail() {
        console.log("failing");
        var failure = {type: "FailureCMD"};
        console.log(failure);
        this.ws.send(JSON.stringify(failure));
    }

    render() {
        return (
            <Grid>
                <div className="well">
                    <h3 className="text-center">{this.state.description}</h3>
                    <div>
                        <Row>
                            <Col sm={3}>
                                <VoteOptionButton bsStyle="warning" submit={this.submit} label={this.state.optionA}
                                                  loading={this.loading}/>
                            </Col>
                            <Col sm={6}>
                                <VoteProgressBar percentage={this.props.state}/>
                            </Col>
                            <Col sm={3} className="text-right">
                                <VoteOptionButton submit={this.submit} label={this.state.optionB} loading={this.loading}/>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Grid>

        );
    }


    setupSocket = function (endpoint) {
        component.webSocket = new WebSocket("ws://localhost:9000/stream/" + endpoint);
        component.webSocket.onopen = function () {
            component.setState({loading: false});
            console.log("socket open and ready!");

            var newVotingCommand = new NewVotingCommand("apa", "Vad föredrar du?", "Java", "C#", "test");

            component.setState({name: "apa", optionA: "Java", optionB: "C#"});
            console.log("sending newVotingCommand!", newVotingCommand);
            component.webSocket.send(JSON.stringify(newVotingCommand));
        };

        component.webSocket.onclose = function () {
            component.setState({loading: true});
        };

        component.webSocket.onmessage = function (msg) {
            console.log("got this state from backend: " + msg.data);
            var newState = JSON.parse(msg.data);
            component.setState({
                name: newState.votingName, optionA: newState.votingOptionA.votingName,
                optionB: newState.votingOptionB.votingName
            });
            component.props.registerVote(msg.data);
        }
    }
}

VoteField.propTypes = {
    registerVote: PropTypes.func.isRequired
};

export default VoteField;

