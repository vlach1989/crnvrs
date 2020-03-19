import {Select as CommonSelect} from '@gisatcz/ptr-state';

import crnvrsData from "./Data/selectors";

export default {
	...CommonSelect,
	specific: {
		crnvrsData
	}
}