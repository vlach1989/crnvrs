import {createSelector} from 'reselect';
import {commonSelectors} from '@gisatcz/ptr-state';
import _ from "lodash";

const getSubstate = state => state.specific.crnvrs;

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

            if (filteredCountries.length) {
                return filteredCountries.map(country => {
                   return {
                       key: country.key,
                       data: {
                           name: country.key,
                           data: Object.values(country.data)
                       }
                   }
                });
            }

            else {
                return null;
            }
        } else {
            return null;
        }
    }
);

export default {
    getFilteredDataByConfirmedCasesThreshold
};