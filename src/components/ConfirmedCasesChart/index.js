import {connect} from '@gisatcz/ptr-state';
import Select from '../../state/Select';
import Action from "../../state/Action";
import presentation from './presentation';

const mapStateToProps = (state, ownProps) => {
    return {
        data: Select.specific.crnvrsData.getFilteredDataByConfirmedCasesThreshold(state, ownProps.threshold, ownProps.countries)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(presentation);
