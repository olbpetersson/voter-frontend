import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';

class VoteOptionButton extends Component {

    render() {
        return <Button
            bsStyle={this.props.bsStyle}
            disabled={this.props.loading}
            onClick={() => this.props.submit(this.props.label)}>
            {this.props.label}
        </Button>
    }

}

VoteOptionButton.propTypes = {
    submit: PropTypes.func,
    label: PropTypes.string,
    loading: PropTypes.bool,
    bsStyle: PropTypes.string
};

VoteOptionButton.defaultProps = {
    bsStyle: "success"
};

export default VoteOptionButton;
