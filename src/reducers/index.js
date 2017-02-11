import { combineReducers } from 'redux'
import votes from './votes'
import user from './user'

const voteApp = combineReducers({votes, user});

export default voteApp;