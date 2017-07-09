import {combineReducers} from 'redux'
import votes from './votes'
import user from './user'
import {routerReducer} from 'react-router-redux';

const voteApp = combineReducers({votes, user, routing: routerReducer});

export default voteApp;