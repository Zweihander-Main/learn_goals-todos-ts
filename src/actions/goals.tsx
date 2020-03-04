/**
 * Goal actions and goal thunks
 */

import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import API from 'goals-todos-api';
import {
	GoalActionTypes,
	ADD_GOAL,
	REMOVE_GOAL,
	Goal,
} from '../types';

export function addGoal(goal: Goal): GoalActionTypes {
	return {
		type: ADD_GOAL,
		payload: {
			goal,
		},
	};
}

export function removeGoal(id: string): GoalActionTypes {
	return {
		type: REMOVE_GOAL,
		payload: {
			id,
		},
	};
}

export const handleDeleteGoal: ActionCreator<ThunkAction<
	Promise<void | Array<Goal>>,
	Goal,
	Goal,
	GoalActionTypes
>> = (goal: Goal) => {
	return (
		dispatch: Dispatch<GoalActionTypes>
	): Promise<void | Array<Goal>> => {
		dispatch(removeGoal(goal.id));
		return API.deleteGoal(goal.id).catch((): void => {
			dispatch(addGoal(goal));
			alert('An error occured. Try again.');
		});
	};
};

export const handleAddGoal: ActionCreator<ThunkAction<
	Promise<void>,
	Goal,
	string | Function,
	GoalActionTypes
>> = (name: string, cb: Function) => {
	return (dispatch: Dispatch<GoalActionTypes>): Promise<void> => {
		return API.saveGoal(name)
			.then((goal: Goal) => {
				dispatch(addGoal(goal));
				cb();
			})
			.catch(() => alert('There was an error. Try again.'));
	};
};
