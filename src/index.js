import React from 'react';
import App from './components/App';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import voteApp from './reducers/index'

const store = createStore(voteApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


render(
    <Provider store={store}>
      <App />
    </Provider>,
      document.getElementById('root')
);
