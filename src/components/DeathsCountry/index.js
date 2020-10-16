import {connect} from '@gisatcz/ptr-state';
import Select from '../../state/Select';
import Action from "../../state/Action";
import presentation from '../StatusCard';

const mapStateToProps = (state, ownProps) => {
    return {
        data: Select.specific.deaths.getDailyByKey(state, ownProps.areaKey)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(presentation);
