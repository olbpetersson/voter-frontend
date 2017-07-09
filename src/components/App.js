import React, {Component} from 'react';
import HeaderContainer from './HeaderContainer';
import {Grid} from 'react-bootstrap';
import VoteFieldContainer from './VoteFieldContainer';

class App extends Component {

    render() {

        return (
            <div className="App">
                <HeaderContainer/>
                <Grid>
                    {this.props.children}
                </Grid>
            </div>
        );
    }

}

export default App;
