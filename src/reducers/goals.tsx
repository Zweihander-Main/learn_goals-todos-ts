/**
 * Add, remove, and initial populate goal actions reducer
 */
import {
	GoalActionTypes,
	OtherActionTypes,
	ADD_GOAL,
	REMOVE_GOAL,
	RECEIVE_DATA,
	Goal,
} from '../types';
import {  Reducer } from 'redux';

export const goals: Reducer<Array<Goal>, GoalActionTypes | OtherActionTypes> = (
	state: Array<Goal> = [],
	action: GoalActionTypes | OtherActionTypes
): Array<Goal> => {
	switch (action.type) {
		case ADD_GOAL:
			return state.concat([action.payload.goal]);
		case REMOVE_GOAL:
			return state.filter((goal) => goal.id !== action.payload.id);
		case RECEIVE_DATA:
			return action.payload.goals;
		default:
			return state;
	}
};
