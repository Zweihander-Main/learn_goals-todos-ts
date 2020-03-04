/**
 * Todo actions and thunks
 */

import {
	TodoActionTypes,
	ADD_TODO,
	REMOVE_TODO,
	TOGGLE_TODO,
	Todo,
} from '../types';
import { Dispatch, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import API from 'goals-todos-api';

export function addTodo(todo: Todo): TodoActionTypes {
	return {
		type: ADD_TODO,
		payload: {
			todo,
		},
	};
}

export function removeTodo(id: string): TodoActionTypes {
	return {
		type: REMOVE_TODO,
		payload: {
			id,
		},
	};
}

export function toggleTodo(id: string): TodoActionTypes {
	return {
		type: TOGGLE_TODO,
		payload: {
			id,
		},
	};
}

export const handleDeleteTodo: ActionCreator<ThunkAction<
	Promise<void | Array<Todo>>,
	Todo,
	Todo,
	TodoActionTypes
>> = (todo: Todo) => {
	return (
		dispatch: Dispatch<TodoActionTypes>
	): Promise<void | Array<Todo>> => {
		dispatch(removeTodo(todo.id));
		return API.deleteTodo(todo.id).catch((): void => {
			dispatch(addTodo(todo));
			alert('An error occured. Try again.');
		});
	};
};

export const handleAddTodo: ActionCreator<ThunkAction<
	Promise<void>,
	Todo,
	string | Function,
	TodoActionTypes
>> = (name: string, cb: Function) => {
	return (dispatch: Dispatch<TodoActionTypes>): Promise<void> => {
		return API.saveTodo(name)
			.then((todo: Todo) => {
				dispatch(addTodo(todo));
				cb();
			})
			.catch(() => alert('There was an error. Try again.'));
	};
};

export const handleToggle: ActionCreator<ThunkAction<
	Promise<void | Array<Todo>>,
	string,
	string,
	TodoActionTypes
>> = (id: string) => {
	return (
		dispatch: Dispatch<TodoActionTypes>
	): Promise<void | Array<Todo>> => {
		dispatch(toggleTodo(id));
		return API.saveTodoToggle(id).catch((): void => {
			dispatch(toggleTodo(id));
			alert('An error occured. Try again.');
		});
	};
};
