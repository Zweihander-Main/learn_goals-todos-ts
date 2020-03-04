/**
 * Renders Loading, Todos, Goals
 */

import React from 'react';
import ConnectedTodos from './Todos';
import ConnectedGoals from './Goals';
import {
	PropsFromRedux,
	connector
} from '../utils/connector';

class App extends React.Component<PropsFromRedux> {
	componentDidMount(): void {
		const { handleInitialDataDispatch } = this.props;
		handleInitialDataDispatch();
	}

	render(): JSX.Element {
		const { loading } = this.props;

		if (loading === true) {
			return <h3>Loading</h3>;
		}

		return (
			<div>
				<ConnectedTodos />
				<ConnectedGoals />
			</div>
		);
	}
}

const ConnectedApp = connector(App);

export default ConnectedApp;
