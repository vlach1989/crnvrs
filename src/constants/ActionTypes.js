import {utils} from '@gisatcz/ptr-utils'
import {commonActionTypesDefinitions} from '@gisatcz/ptr-state';

export const crnvrs = {
    CRNVRS_DATA: {
        ADD: null,
    }
};

export default utils.deepKeyMirror({...commonActionTypesDefinitions, ...crnvrs});

