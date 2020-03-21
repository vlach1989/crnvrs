import {Action as CommonAction} from '@gisatcz/ptr-state';

import confirmedCases from './ConfirmedCases/actions';

export default {
	...CommonAction,
	specific: {
		confirmedCases
	}
}