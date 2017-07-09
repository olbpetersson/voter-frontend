import React from 'react';
import App from './components/App';
import Welcome from './components/Welcome';
import VoteFieldContainer from './components/VoteFieldContainer'
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import voteApp from './reducers/index';

const store = createStore(voteApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <App>
            <Router history={history} >
                <Route path="/" component={Welcome}>
                </Route>
                <Route path="/:voteId" component={VoteFieldContainer}>
                </Route>
            </Router>
        </App>
    </Provider>,
    document.getElementById('root')
);
