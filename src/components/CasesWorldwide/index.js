import {connect} from '@gisatcz/ptr-state';
import Select from '../../state/Select';
import Action from "../../state/Action";
import presentation from '../StatusCard';

const mapStateToProps = (state, ownProps) => {
    return {
        data: Select.specific.confirmedCases.getSum(state)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(presentation);
