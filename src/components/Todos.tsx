/**
 * Renders List with Todo data. Calls todo dispatch.
 */
import React from 'react';
import { Goal, Todo } from '../types';
import {
	PropsFromRedux,
	connector
} from '../utils/connector';
import List from './List';

interface TodosProps {
	todos: Array<Todo>;
}

class Todos extends React.Component<TodosProps & PropsFromRedux> {
	input: HTMLInputElement | undefined = undefined;

	addItem = (
		e: React.MouseEvent<HTMLButtonElement>
	): Promise<void> | void => {
		e.preventDefault();
		if (this.input) {
			this.props.handleAddTodoDispatch(this.input.value, (): void => {
				if (this.input) {
					this.input.value = '';
				}
			});
		}
	};

	removeItem = (todo: Goal | Todo): void => {
		this.props.handleDeleteTodoDispatch(todo as Todo);
	};

	toggleItem = (id: string): void => {
		this.props.handleToggleDispatch(id);
	};

	render(): JSX.Element {
		return (
			<div>
				<h1>Todo List</h1>
				<input
					type="text"
					placeholder="Add Todo"
					ref={(input: HTMLInputElement): HTMLInputElement =>
						(this.input = input)
					}
				/>
				<button onClick={this.addItem}>Add Todo</button>

				<List
					items={this.props.todos}
					remove={this.removeItem}
					toggle={this.toggleItem}
				/>
			</div>
		);
	}
}

const ConnectedTodos = connector(Todos);

export default ConnectedTodos;
