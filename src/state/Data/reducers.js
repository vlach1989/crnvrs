import ActionTypes from '../../constants/ActionTypes';
import {DEFAULT_INITIAL_STATE, commonReducers as common} from '@gisatcz/ptr-state';

const INITIAL_STATE = {
	...DEFAULT_INITIAL_STATE
};

const addOrUpdate = (state, action) => {
	let newData = {...state.byKey};
	if (action.data && action.data.length) {
		action.data.forEach(model => {
			if (newData[model.key]) {
				newData[model.key] = {
					...newData[model.key],
					data: {
						...newData[model.key].data, ...model.data
					}
				};
			} else {
				newData[model.key] = {...newData[model.key], ...model};
			}
		});
	}
	return {...state, byKey: newData}
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ActionTypes.CRNVRS_DATA.ADD:
			return addOrUpdate(state, action);
		default:
			return state;
	}
}
