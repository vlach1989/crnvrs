import {Select as CommonSelect} from '@gisatcz/ptr-state';

import confirmedCases from "./ConfirmedCases/selectors";
import deaths from "./Deaths/selectors";

export default {
	...CommonSelect,
	specific: {
		confirmedCases,
		deaths
	}
}