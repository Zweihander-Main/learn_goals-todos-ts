/**
 * Add, remove, toggle, and initial populate todo actions reducer
 */
import {
	TodoActionTypes,
	OtherActionTypes,
	ADD_TODO,
	REMOVE_TODO,
	TOGGLE_TODO,
	RECEIVE_DATA,
	Todo,
} from '../types';
import { Reducer } from 'redux';

export const todos: Reducer<Array<Todo>, TodoActionTypes | OtherActionTypes> = (
	state: Array<Todo> = [],
	action: TodoActionTypes | OtherActionTypes
): Array<Todo> => {
	switch (action.type) {
		case ADD_TODO:
			return state.concat([action.payload.todo]);
		case REMOVE_TODO:
			return state.filter((todo: Todo) => todo.id !== action.payload.id);
		case TOGGLE_TODO:
			return state.map((todo: Todo) =>
				todo.id !== action.payload.id
					? todo
					: Object.assign({}, todo, { complete: !todo.complete })
			);
		case RECEIVE_DATA:
			return action.payload.todos;
		default:
			return state;
	}
};
