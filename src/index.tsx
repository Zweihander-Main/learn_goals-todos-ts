import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';
import { RootState } from './types';
import { middleware } from './middleware';
import { rootReducer } from './reducers';
import './index.css';
import ConnectedApp from './components/App';

const store: Store<RootState> = createStore(rootReducer, middleware);

ReactDOM.render(
	<Provider store={store}>
		<ConnectedApp />
	</Provider>,
	document.getElementById('root')
);


