import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import VoteField from './VoteField';
import {registerVote} from '../actions'

class VoteFieldContainer extends Component {
    render() {
        return <VoteField registerVote={registerVote}/>
    }
}

function mapStateToProps(state) {
    return {
        state: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registerVote: (int) => dispatch(registerVote(int))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VoteField);
