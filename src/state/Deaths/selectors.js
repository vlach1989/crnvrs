import {commonSelectors, componentsSelectors} from "@gisatcz/ptr-state";
import {createSelector} from 'reselect';
import _ from "lodash";

const getSubstate = state => state.specific.deaths;

const getAll = commonSelectors.getAll(getSubstate);
const getAllAsObject = commonSelectors.getAllAsObject(getSubstate);
const getByKey = commonSelectors.getByKey(getSubstate);

const getAllMoreThan5 = createSelector(
    [getAll],
    (all) => {
        return _.filter(all, (item) => {
            return item.data.current > 4;
        });
    }
);

const getAllSortedByComponent = createSelector(
    [
        getAllMoreThan5,
        (state,componentKey) => componentsSelectors.getDataByComponentKey(state, componentKey)
    ],
    (allCases, componentState) => {
        const sorting = componentState.sorting;
        return _.orderBy(allCases, [sorting[0]], [sorting[1]]);
    }
);

const getSum = createSelector(
    [getAll],
    (data) => {
        let current = 0, previousDay = 0, threeDaysBefore = 0, weekBefore = 0;
        _.forEach(data, item => {
            if (item.data) {
                const d = item.data;
                current += d.current ? d.current : 0;
                previousDay += d.previousDay ? d.previousDay : 0;
                threeDaysBefore += d.threeDaysBefore ? d.threeDaysBefore : 0;
                weekBefore += d.weekBefore ? d.weekBefore : 0;
            }
        });

        return data && data.length ? {data: {current, previousDay, threeDaysBefore, weekBefore}} : null;
    }
);

/********************************************/
const getDailyByKey = createSelector(
	[getByKey],
	(country) => {
		const d = country?.data;
		let yesterday = 0, previousDay = 0, tenDaysBefore = 0;
		if (d?.dailyCases?.[0]) {
			yesterday = d.dailyCases[0];
		}

		if (d?.dailyCases?.[1]) {
			previousDay = d.dailyCases[1];
		}

		if (d?.dailyCases?.[10]) {
			tenDaysBefore = d.dailyCases[10];
		}

		return d ? {data: {yesterday, previousDay, tenDaysBefore}} : null;
	}
);

const getDailyCasesSum = createSelector(
	[getAll],
	(data) => {
		let yesterday = 0, previousDay = 0, tenDaysBefore = 0;
		_.forEach(data, item => {
			if (item.data) {
				const d = item.data;
				if (d?.dailyCases?.[0]) {
					yesterday += d.dailyCases[0];
				}

				if (d?.dailyCases?.[1]) {
					previousDay += d.dailyCases[1];
				}

				if (d?.dailyCases?.[10]) {
					tenDaysBefore += d.dailyCases[10];
				}
			}
		});

		return data && data.length ? {data: {yesterday, previousDay, tenDaysBefore}} : null;
	}
);

export default {
    getAll,
    getAllAsObject,
    getAllSortedByComponent,
    getByKey,
    getSum,

	getDailyByKey,
	getDailyCasesSum
}