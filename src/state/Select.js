import {Select as CommonSelect} from '@gisatcz/ptr-state';

import confirmedCases from "./ConfirmedCases/selectors";

export default {
	...CommonSelect,
	specific: {
		confirmedCases
	}
}