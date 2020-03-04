/**
 * Combines goal, todo, and loading reducers
 */
import {goals} from './goals';
import {todos} from './todos';
import {loading} from './loading';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
	todos,
	goals,
	loading,
});
