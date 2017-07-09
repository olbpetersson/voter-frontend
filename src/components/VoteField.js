import React, {Component, PropTypes} from "react";
import {Col, Row, Grid} from "react-bootstrap";
import RegisterVoteCommandDto from "./dto/RegisterVoteCommandDto";
import VoteStandingsCommand from "./dto/VoteStandingsCommand";
import VoteOptionButton from "./VoteOptionButton";
import VoteProgressBar from "./VoteProgressBar";

var component;

class VoteField extends Component {

    constructor(props) {
        super(props);
        console.log("the props we have", props);
        var endpath = props.location.pathname;
        console.log("got a lot of props: " + JSON.stringify(props));
        console.log("this " + JSON.stringify(this.props))
        component = this;
        this.setupSocket = this.setupSocket.bind(this);
        this.setState = this.setState.bind(this);
        this.submit = this.submit.bind(this);
        this.fail = this.fail.bind(this);
        this.state = {name: "Loading", description: "Loading", optionA: "Loading", optionB: "Loading", value: 50, loading: true};
        this.webSocket = undefined;
        this.setupSocket(endpath);

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
        );
    }


    setupSocket = function (endpoint) {
        component.webSocket = new WebSocket("ws://localhost:9000/stream" + endpoint);
        component.webSocket.onopen = function () {
            component.setState({loading: false});
            console.log("socket open and ready!");

            //var newVotingCommand = new NewVotingCommand("apa", "Vad föredrar du?", "Java", "C#", "test");
            var voteStandingsCommand = new VoteStandingsCommand(endpoint.replace("/", ""));
            //component.setState({name: "apa", optionA: "Java", optionB: "C#"});
            console.log("sending voteStandingsCommand!", voteStandingsCommand);
            component.webSocket.send(JSON.stringify(voteStandingsCommand));
        };

        component.webSocket.onclose = function () {
            component.setState({loading: true});
        };

        component.webSocket.onmessage = function (msg) {
            console.log("got this state from backend: " + msg.data);
            var newState = JSON.parse(msg.data);
            component.setState({
                name: newState.votingName, optionA: newState.votingOptionA.votingName,
                description: newState.description,
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

