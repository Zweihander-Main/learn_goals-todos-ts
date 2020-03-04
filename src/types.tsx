/**
 * Defined Goal, Todo, and actions
 */
import { Action } from 'redux';

export interface Goal {
	id: string;
	name: string;
}

export interface Todo {
	id: string;
	name: string;
	complete: boolean;
}

export interface RootState {
	readonly todos: Array<Todo>;
	readonly goals: Array<Goal>;
	readonly loading: boolean;
}

export const ADD_GOAL = 'ADD_GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export interface AddGoalAction extends Action<typeof ADD_GOAL> {
	type: typeof ADD_GOAL;
	payload: {
		goal: Goal;
	};
}

export interface RemoveGoalAction extends Action<typeof REMOVE_GOAL> {
	type: typeof REMOVE_GOAL;
	payload: {
		id: string;
	};
}

export interface AddTodoAction extends Action<typeof ADD_TODO> {
	type: typeof ADD_TODO;
	payload: {
		todo: Todo;
	};
}

export interface RemoveTodoAction extends Action<typeof REMOVE_TODO> {
	type: typeof REMOVE_TODO;
	payload: {
		id: string;
	};
}

export interface ToggleTodoAction extends Action<typeof TOGGLE_TODO> {
	type: typeof TOGGLE_TODO;
	payload: {
		id: string;
	};
}

export interface ReceiveDataAction extends Action<typeof RECEIVE_DATA> {
	type: typeof RECEIVE_DATA;
	payload: {
		todos: Array<Todo>;
		goals: Array<Goal>;
	};
}

export type GoalActionTypes = AddGoalAction | RemoveGoalAction;
export type TodoActionTypes =
	| AddTodoAction
	| RemoveTodoAction
	| ToggleTodoAction;
export type OtherActionTypes = ReceiveDataAction;

export type RootAction = GoalActionTypes | TodoActionTypes | OtherActionTypes;
