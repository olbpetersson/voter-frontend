import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from './Header';
import {loginUser} from '../actions/login'

class HeaderContainer extends Component {
    render() {
        return <Header loginUser={loginUser}/>
    }
}

function mapStateToProps(state) {
    return {
        state: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: (user) => dispatch(loginUser(user))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
