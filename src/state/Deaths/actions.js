import ActionTypes from '../../constants/ActionTypes';
import {commonActions as common} from '@gisatcz/ptr-state';

import helpers from "../helpers";

import config from "../../config";

// ============ creators ===========

const add = common.add(ActionTypes.DEATHS);

const load = () => (dispatch) => {
    dispatch(helpers.loadCsvData(config.deathsData, add));
};

// ============ helpers ===========

// ============ actions ===========

// ============ export ===========

export default {
    load
}