/**
 * Handle react-redux connector and all thunk dispatches. Easier to break out
 * in TypeScript.
 */
import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Goal, Todo, RootState, RootAction } from '../types';
import {
	handleAddGoal,
	handleDeleteGoal
} from '../actions/goals';
import {
	handleAddTodo,
	handleDeleteTodo,
	handleToggle
} from '../actions/todos';
import {
	handleInitialData,
} from '../actions/shared';

const mapState = (state: RootState): RootState => ({ ...state });

const mapDispatchToProps = (
	dispatch: ThunkDispatch<
		Array<Todo> & Array<Todo> & Todo & Goal & string,
		Goal & Todo & string & undefined,
		RootAction
	>
): { [key: string]: Function } => {
	return {
		handleInitialDataDispatch: (): Promise<void> =>
			dispatch(handleInitialData()),
		handleAddGoalDispatch: (name: string, cb: Function): Promise<void> =>
			dispatch(handleAddGoal(name, cb)),
		handleDeleteGoalDispatch: (goal: Goal): Promise<void | Array<Goal>> =>
			dispatch(handleDeleteGoal(goal)),
		handleAddTodoDispatch: (name: string, cb: Function): Promise<void> =>
			dispatch(handleAddTodo(name, cb)),
		handleDeleteTodoDispatch: (todo: Todo): Promise<void | Array<Todo>> =>
			dispatch(handleDeleteTodo(todo)),
		handleToggleDispatch: (id: string): Promise<void | Array<Todo>> =>
			dispatch(handleToggle(id)),
	};
};

export const connector = connect(mapState, mapDispatchToProps);

export type PropsFromRedux = ConnectedProps<typeof connector>;
