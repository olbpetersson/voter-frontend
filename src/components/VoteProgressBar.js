import React, { Component } from 'react';
import {ProgressBar} from 'react-bootstrap';

class VoteProgressBar extends Component {
    render() {
        return (
            <ProgressBar>
                <ProgressBar striped bsStyle="success" now={50} key={1} />
                <ProgressBar active bsStyle="danger" now={50} key={2} />
            </ProgressBar>
        );
    }
}

export default VoteProgressBar;
