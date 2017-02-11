import React, {Component} from 'react';
import Helmet from 'react-helmet';
import HeaderContainer from './HeaderContainer';
import Container from './Container';

class App extends Component {

    render() {

        return (
            <div className="App">
                <HeaderContainer />
                <Container />
            </div>
        );
    }

}

export default App;
