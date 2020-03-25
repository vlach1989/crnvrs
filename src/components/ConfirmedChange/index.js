import {connect} from '@gisatcz/ptr-state';
import Select from '../../state/Select';
import Action from "../../state/Action";
import presentation from './presentation';

const mapStateToProps = (state, ownProps) => {
    return {
        allSortedByChange: Select.specific.confirmedCases.getAllSortedByChange(state)
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(presentation);
