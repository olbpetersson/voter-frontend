import React, {Component} from 'react';

import Header from './Header';
import Container from './Container';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Container/>
            </div>
        );
    }
}

export default App;
