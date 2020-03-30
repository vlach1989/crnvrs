import {connect} from '@gisatcz/ptr-state';
import Select from '../../state/Select';
import Action from "../../state/Action";
import presentation from '../TotalTableCard';

const mapStateToProps = (state, ownProps) => {
    return {
        allAreas: Select.specific.deaths.getAllSortedByComponent(state, ownProps.componentKey)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(presentation);
