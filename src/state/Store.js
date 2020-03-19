import { createStore, combineReducers, applyMiddleware, compose, thunk, logger, reduxBatch } from '@gisatcz/ptr-state';
import { connectRouter, routerMiddleware } from '@gisatcz/ptr-state';
import { createBrowserHistory } from 'history';
import { wrapHistory } from "oaf-react-router";

// base types
import {appReducers} from '@gisatcz/ptr-state';

// specific
import crnvrsDataReducers from './Data/reducers'

export const createHistory = (options) => {
	let history = createBrowserHistory(options);
	const settings = {
		primaryFocusTarget: "body",
		smoothScroll: true
	};
	wrapHistory(history, settings);
	return history;
};

// Redux store creator
export default history => {

	let middleware = applyMiddleware(thunk, routerMiddleware(history));
	if (process.env.NODE_ENV === 'development') {
		middleware = applyMiddleware(thunk, logger, routerMiddleware(history));
	}
	return createStore(combineReducers({
		specific: combineReducers({
			crnvrs: crnvrsDataReducers
		}),
		app: appReducers,
		router: connectRouter(history)
	}), compose(reduxBatch, middleware, reduxBatch, applyMiddleware(thunk), reduxBatch));
}