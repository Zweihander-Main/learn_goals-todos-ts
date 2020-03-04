/**
 * Applies checker, logger, thunk
 */
import { applyMiddleware } from 'redux';
import { RootAction, RootState } from '../types';
import ReduxThunk, { ThunkMiddleware, ThunkDispatch } from 'redux-thunk';
import {checker} from './checker';
import {logger} from './logger';

type DispatchFunctionType = ThunkDispatch<RootState, undefined, RootAction>;

export const middleware = applyMiddleware<DispatchFunctionType, RootState>(
	ReduxThunk as ThunkMiddleware<RootState, RootAction>,
	checker,
	logger
);
