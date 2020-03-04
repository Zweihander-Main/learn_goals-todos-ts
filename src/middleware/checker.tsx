/**
 * Checks if 'bitcoin' is present, stops and warns user if so
 */
import { Dispatch } from 'redux';
import { RootAction, ADD_TODO, ADD_GOAL } from '../types';

export const checker = () => (next: Dispatch<RootAction>) => (
	action: RootAction
): RootAction | void => {
	if (
		action.type === ADD_TODO &&
		action.payload.todo.name.toLowerCase().includes('bitcoin')
	) {
		return alert('Nope. That is a bad idea.');
	}
	if (
		action.type === ADD_GOAL &&
		action.payload.goal.name.toLowerCase().includes('bitcoin')
	) {
		return alert('Nope. That is a bad idea.');
	}

	return next(action);
};
