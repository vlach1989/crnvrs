import {Action as CommonAction} from '@gisatcz/ptr-state';

import confirmedCases from './ConfirmedCases/actions';
import deaths from './Deaths/actions';

export default {
	...CommonAction,
	specific: {
		confirmedCases,
		deaths
	}
}