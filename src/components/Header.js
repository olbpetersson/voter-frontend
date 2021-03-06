import React, {Component, PropTypes} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import GoogleLogin from 'react-google-login'

var component;

class Header extends Component {
    constructor(props){
        super(props);
        component = this;
    }

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        Event Sourcing with Lagom
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                    <GoogleLogin
                    clientId="842178290911-ustdpace9k6sm2btekobjrd2ntmv45mo.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    />
                </Nav>
            </Navbar>
        );
    }

    responseGoogle(e){
        console.log("response", e);
        fetch("http://localhost:9000/token", {
                method: "POST",
                body: e.accessToken,
            }
        ).then(function(response){
            console.log("Got a response", response);
        }).catch(function(error){
            console.log("there was an error", error);
        });

        component.props.loginUser({username: "test"});
    }
}


Header.propTypes = {
    loginUser: PropTypes.func.isRequired
};
export default Header;
