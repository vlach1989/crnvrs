import {createSelector} from 'reselect';
import {commonSelectors} from '@gisatcz/ptr-state';
import _ from "lodash";

const getSubstate = state => state.specific.confirmedCases;

const getAll = commonSelectors.getAll(getSubstate);

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
    getFilteredDataByConfirmedCasesThreshold
};