/**
 * Actions and thunks utilizing both goals and todos
 */

import {
	OtherActionTypes,
	RECEIVE_DATA,
	Goal,
	Todo,
} from '../types';
import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import API from 'goals-todos-api';

export function receiveData(
	todos: Array<Todo>,
	goals: Array<Goal>
): OtherActionTypes {
	return {
		type: RECEIVE_DATA,
		payload: {
			goals,
			todos,
		},
	};
}

export const handleInitialData: ActionCreator<ThunkAction<
	Promise<void>,
	Array<Todo> | Array<Goal>,
	null,
	OtherActionTypes
>> = () => {
	return (dispatch: Dispatch<OtherActionTypes>): Promise<void> => {
		return Promise.all<Array<Todo>, Array<Goal>>([
			API.fetchTodos(),
			API.fetchGoals(),
		]).then(([todos, goals]): void => {
			dispatch(receiveData(todos, goals));
		});
	};
};
