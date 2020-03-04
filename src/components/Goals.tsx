/**
 * Renders List with Goal data. Calls goal dispatch.
 */
import React from 'react';
import { Goal, Todo } from '../types';
import {
	PropsFromRedux,
	connector
} from '../utils/connector';
import List from './List';

interface GoalsProps {
	goals: Array<Goal>;
}

class Goals extends React.Component<GoalsProps & PropsFromRedux> {
	input: HTMLInputElement | undefined = undefined;

	addItem = (
		e: React.MouseEvent<HTMLButtonElement>
	): Promise<void> | void => {
		e.preventDefault();
		if (this.input) {
			this.props.handleAddGoalDispatch(this.input.value, (): void => {
				if (this.input) {
					this.input.value = '';
				}
			});
		}
	};

	removeItem = (goal: Goal | Todo): void => {
		this.props.handleDeleteGoalDispatch(goal as Goal);
	};

	render(): JSX.Element {
		return (
			<div>
				<h1>Goals</h1>
				<input
					type="text"
					placeholder="Add Goal"
					ref={(input: HTMLInputElement): HTMLInputElement =>
						(this.input = input)
					}
				/>
				<button onClick={this.addItem}>Add Goal</button>
				<List items={this.props.goals} remove={this.removeItem} />
			</div>
		);
	}
}

const ConnectedGoals = connector(Goals);

export default ConnectedGoals;
