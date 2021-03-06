import ActionTypes from '../../constants/ActionTypes';
import {commonActions as common} from '@gisatcz/ptr-state';

import helpers from "../helpers";

import config from "../../config";

// ============ creators ===========

const add = common.add(ActionTypes.CONFIRMED_CASES);

const load = () => (dispatch) => {
	dispatch(helpers.loadCsvData(config.confirmedCasesData, add));
};

// ============ helpers ===========

// ============ actions ===========

// ============ export ===========

export default {
	load
}