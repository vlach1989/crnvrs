import {createSelector} from 'reselect';
import {commonSelectors, componentsSelectors} from '@gisatcz/ptr-state';
import _ from "lodash";

const getSubstate = state => state.specific.confirmedCases;

const getAll = commonSelectors.getAll(getSubstate);

const getAllSortedByComponent = createSelector(
    [
        getAll,
        (state,componentKey) => componentsSelectors.getDataByComponentKey(state, componentKey)
    ],
    (allCases, componentState) => {
        const order = componentState.order[0];
        return _.orderBy(allCases, [order[0]], [order[1]]);
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

export default {
    getAll,
    getAllSortedByCases,
    getAllSortedByChange,
    getAllSortedByComponent,
    getFilteredDataByConfirmedCasesThreshold
};