import moment from 'moment';
import _ from 'lodash';
import ActionTypes from '../../constants/ActionTypes';
import {commonActions as common} from '@gisatcz/ptr-state';
import Papa from 'papaparse';

import config from "../../config";

// ============ creators ===========

const add = common.add(ActionTypes.CONFIRMED_CASES);

const loadCsvData = () => (dispatch) => {
	Papa.parse(config.confirmedCasesData, {
		download: true,
		header: true,
		complete: function(result) {
			if (result && result.data) {
				const finalData = result.data.map(area => {
					const country = area["Country/Region"];
					const province = area["Province/State"];
					delete area["Country/Region"];
					delete area["Province/State"];
					delete area.Lat;
					delete area.Long;

					let key = country;
					if (province) {
						key += "_" + province;
					}

					let timeSerie = [];
					_.forIn(area, (val, dateString) => {
						const date = moment(dateString).toISOString();
						const value = Number(val);

						if (value) {
							timeSerie.push({
								date,
								value
							});
						}
					});

					return {
						key,
						data: {
							name: province ? `${province} (${country})` : country,
							country,
							province,
							cases: timeSerie
						}
					}
				});

				dispatch(add(finalData));
			} else {
				throw Error("Data loading failed!")
			}
		}
	});
};

// ============ helpers ===========

// ============ actions ===========

// ============ export ===========

export default {
	loadCsvData
}