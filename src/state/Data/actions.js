import moment from 'moment';
import ActionTypes from '../../constants/ActionTypes';
import utils from '../../utils';
import {commonActions as common} from '@gisatcz/ptr-state';

// ============ creators ===========

const add = common.add(ActionTypes.CRNVRS_DATA);

const loadData = () => (dispatch) => {
	const days = enumerateDaysBetweenDates(moment('01-22-2020'), moment());

	days.forEach(dayFull => {
		const day = moment(dayFull).format("MM-DD-YYYY");
		const url = "https://covid19.mathdro.id/api/daily/" + day;
		utils.request(url, "GET", null, null).then((data) => {
			if (data) {
				const dataToSave = data.map((item) => {
					let key = `${item.countryRegion}${item.provinceState ? "_" + item.provinceState : ""}`;

					// TODO More checks
					if (key === "Czech Republic") {
						key = "Czechia";
					}

					return {
						key,
						data: {
							[day]: {...item, day, dayFull}
						}
					};
				});

				dispatch(add(dataToSave));
			} else {
				throw new Error("No data returned");
			}
		});
	});
};

// ============ helpers ===========

const enumerateDaysBetweenDates = function(startDate, endDate) {
	let dates = [];

	let currDate = moment(startDate).startOf('day');
	let lastDate = moment(endDate).startOf('day');

	while(currDate.add(1, 'days').diff(lastDate) < 0) {
		dates.push(currDate.clone().toDate());
	}

	return dates;
};

// ============ actions ===========

// ============ export ===========

export default {
	loadData
}