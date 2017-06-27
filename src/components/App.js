import React, {Component} from 'react';
import HeaderContainer from './HeaderContainer';
import VoteFieldContainer from './VoteFieldContainer';

class App extends Component {

    render() {

        return (
            <div className="App">
                <HeaderContainer />
                <VoteFieldContainer />
            </div>
        );
    }

}

export default App;
