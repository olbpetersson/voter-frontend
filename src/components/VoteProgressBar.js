import React, {Component, PropTypes} from 'react';
import {ProgressBar} from 'react-bootstrap';

class VoteProgressBar extends Component {
    render() {
        return (
            <ProgressBar disabled={this.props.loading}>
                <ProgressBar active bsStyle="success" now={100 - this.props.percentage} key={1}/>
                <ProgressBar active bsStyle="warning" now={this.props.percentage} key={2}/>
            </ProgressBar>
        );
    }
}

VoteProgressBar.propTypes = {
    percentage: PropTypes.number.isRequired,
    loading: PropTypes.bool
};


export default VoteProgressBar;
