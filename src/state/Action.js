import {Action as CommonAction} from '@gisatcz/ptr-state';

import crnvrsData from './Data/actions';

export default {
	...CommonAction,
	specific: {
		crnvrsData
	}
}