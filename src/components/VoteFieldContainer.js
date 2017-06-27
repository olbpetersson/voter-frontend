import React, {Component} from 'react';
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
        state: state.votes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registerVote: (newState) => {
            console.log("this is newState " + newState)
            dispatch(registerVote(newState));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VoteField);
