import {Goal, Todo} from './types';

declare let API: {
	fetchGoals: () => Promise<Array<Goal>>,
	fetchTodos: () => Promise<Array<Todo>>,
	saveTodo: (name: string) => Promise<Todo>,
	saveGoal: (name: string) => Promise<Goal>,
	deleteGoal: (id: string) => Promise<Array<Goal>>,
	deleteTodo: (id: string) => Promise<Array<Todo>>,
	saveTodoToggle: (id: string) => Promise<Array<Todo>>,
};

export default API;
