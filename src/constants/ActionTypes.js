import {utils} from '@gisatcz/ptr-utils'
import {commonActionTypesDefinitions} from '@gisatcz/ptr-state';

export const crnvrs = {
    CONFIRMED_CASES: {
        ADD: null,
    }
};

export default utils.deepKeyMirror({...commonActionTypesDefinitions, ...crnvrs});

