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
            const filteredCountries = _.filter(data, item => {
                return _.includes(countries, item.key);
            });

            return filteredCountries;
        } else {
            return null;
        }
    }
);

export default {
    getFilteredDataByConfirmedCasesThreshold
};