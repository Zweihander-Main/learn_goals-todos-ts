/**
 * Logs all actions
 */
import { Dispatch, MiddlewareAPI } from 'redux';
import { RootAction, RootState } from '../types';

/* eslint-disable no-console */
export const logger = (store: MiddlewareAPI<Dispatch, RootState>) => (
	next: Dispatch<RootAction>
) => (action: RootAction): RootAction | void => {
	console.group(action.type);
	console.log('The action: ', action);
	const result = next(action);
	console.log('The new state: ', store.getState());
	console.groupEnd();
	return result;
};
/* eslint-enable no-console */
