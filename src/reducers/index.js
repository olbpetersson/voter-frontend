import { combineReducers } from 'redux'
import votes from './votes'

const voteApp = combineReducers({votes});

export default voteApp;