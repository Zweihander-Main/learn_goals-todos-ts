/**
 * Loading on initial render reducer
 */
import {
	OtherActionTypes,
	RECEIVE_DATA,
} from '../types';
import { Reducer } from 'redux';

export const loading: Reducer<boolean, OtherActionTypes> = (
	state = true,
	action: OtherActionTypes
): boolean => {
	switch (action.type) {
		case RECEIVE_DATA:
			return false;
		default:
			return state;
	}
};
