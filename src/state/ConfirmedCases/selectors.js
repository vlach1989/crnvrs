import {createSelector} from 'reselect';
import {commonSelectors, componentsSelectors} from '@gisatcz/ptr-state';
import DeathsSelectors from "../Deaths/selectors";
import _ from "lodash";

const getSubstate = state => state.specific.confirmedCases;

const getAll = commonSelectors.getAll(getSubstate);
const getAllAsObject = commonSelectors.getAllAsObject(getSubstate);
const getByKey = commonSelectors.getByKey(getSubstate);

const getAllWithMoreThan100 = createSelector(
    [getAll],
    (all) => {
        return _.filter(all, (item) => {
            return item.data.current > 99;
        });
    }
);

const getAllSortedByComponent = createSelector(
    [
        getAllWithMoreThan100,
        (state,componentKey) => componentsSelectors.getDataByComponentKey(state, componentKey)
    ],
    (allCases, componentState) => {
        const sorting = componentState.sorting;
        return _.orderBy(allCases, [sorting[0]], [sorting[1]]);
    }
);

const getAllSortedByCases = createSelector(
    [
        getAll
    ],
    (allCases) => {
        return _.orderBy(allCases, ['data.current'], ['desc']);
    }
);

const getAllSortedByChange = createSelector(
    [
        getAll
    ],
    (allCases) => {
        return _.orderBy(allCases, ['data.dailyChangeAbsolute'], ['desc']);
    }
);

const getFilteredDataByConfirmedCasesThreshold = createSelector(
    [
        getAll,
        (state, threshold) => threshold,
        (state, threshold, countries) => countries
    ],
    (data, threshold, countries) => {
        if (data.length) {
            let filteredCountries = _.filter(data, item => {
                return _.includes(countries, item.key);
            });

            let appliedThreshold = null;
            if (filteredCountries) {
                appliedThreshold = filteredCountries.map(country => {
                    let filteredCases = [];

                    let index = 1;
                    _.forEach(country.data.cases, (item) => {
                        if (item.value >= threshold) {
                            filteredCases.push({
                                ...item, day: index
                            });
                            index++;
                        }
                    });

                    return {
                        ...country,
                        data: {
                            ...country.data,
                            cases: filteredCases
                        }
                    }
                });
            }

            return appliedThreshold;
        } else {
            return null;
        }
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

const getFilteredCasesWithDeaths = createSelector(
    [
        getAllAsObject,
        DeathsSelectors.getAllAsObject,
        (state, countries) => countries
    ],
    (cases, deaths, countries) => {
        if (!_.isEmpty(cases) && !_.isEmpty(deaths)) {
            return countries.map(countryKey => {
               return {
                   key: countryKey,
                   cases: cases[countryKey],
                   deaths: deaths[countryKey]
               }
            });
        } else {
            return null;
        }
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
    getAllSortedByCases,
    getAllSortedByChange,
    getAllSortedByComponent,
    getFilteredDataByConfirmedCasesThreshold,
    getFilteredCasesWithDeaths,

    getByKey,
    getSum,


	getDailyByKey,
	getDailyCasesSum
};