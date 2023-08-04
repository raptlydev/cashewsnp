import { combineReducers } from 'redux';
import global from './reducers/global';
import database from './reducers/database';

const rootReducer = combineReducers({
	global,
	database
});

export default rootReducer;
