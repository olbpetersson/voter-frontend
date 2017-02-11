import React, {Component, PropTypes} from 'react';
import {Row, Col, Button, ProgressBar} from 'react-bootstrap';

var component;
const epochOfRender = new Date().getTime();

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
        this.state = {value: props.state, loading: true};
        this.ws = new WebSocket("ws://localhost:8080/voting");
        this.setupSocket(this.ws);

    }

    submit(voteVal) {
        console.log("Submitting");
        var registerVoteCommand =
            {
                type: "RegisterVoteCommand",
                payload: {
                    voteValue: voteVal,
                    epochUuid: epochOfRender
                }
            };

        console.log(registerVoteCommand);
        this.ws.send(JSON.stringify(registerVoteCommand));
    }

    fail() {
        console.log("failing");
        var failure = {type: "FailureCMD"};
        console.log(failure);
        this.ws.send(JSON.stringify(failure));
    }

    render() {
        let loading = this.state.loading;
        return (
            <div>
                <Row>
                    <Col sm={3}>
                        <Button
                            bsStyle="warning"
                            disabled={loading}
                            onClick={() => this.submit(-1)}>
                            Downvote
                        </Button>
                    </Col>
                    <Col sm={6}>
                        <ProgressBar disabled={loading}>
                            <ProgressBar active bsStyle="success" now={this.props.state} key={1} />
                            <ProgressBar active bsStyle="warning" now={100 - this.props.state} key={2} />
                        </ProgressBar>
                    </Col>
                    <Col sm={3} className="text-right">
                        <Button
                            bsStyle="success"
                            disabled={loading}
                            onClick={() => this.submit(1)}>
                            Upvote
                        </Button>
                    </Col>
                </Row>
                <Row className="text-center">
                    <Button
                        bsStyle="danger"
                        disabled={loading}
                        onClick={this.fail}>
                        Crasch it!
                    </Button>
                </Row>
            </div>
        );
    }


    setupSocket = function (webSocket) {
        webSocket.onopen = function () {
            component.setState({loading: false});
            console.log("socket open and ready!");
            var voteStandingsCommand =
                {
                    type: "VoteStandingsCommand",
                    payload: {}
                };
            webSocket.send(JSON.stringify(voteStandingsCommand));
        };

        webSocket.onclose = function () {
            component.setState({loading: true});
        };

        webSocket.onmessage = function (msg) {
            console.log("got this state from backend: " + parseInt(msg.data, 10));
            component.props.registerVote(parseInt(msg.data, 10));
        }
    }
}

VoteField.propTypes = {
    registerVote: PropTypes.func.isRequired
};

export default VoteField;

