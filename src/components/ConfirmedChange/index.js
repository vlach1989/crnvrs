import {connect} from '@gisatcz/ptr-state';
import Select from '../../state/Select';
import Action from "../../state/Action";
import presentation from './presentation';

const mapStateToProps = (state, ownProps) => {
    return {
        allSortedByComponent: Select.specific.confirmedCases.getAllSortedByComponent(state, ownProps.componentKey),
        contentOptions: Select.components.get(state, ownProps.componentKey, "contentOptions"),
        activeContentOption: Select.components.get(state, ownProps.componentKey, "activeContentOption"),
        sorting: Select.components.get(state, ownProps.componentKey, "sorting")
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setActiveContentOption: (activeContentOption) => {
            dispatch(Action.components.set(ownProps.componentKey, "activeContentOption", activeContentOption))
        },
        setSorting: (sorting) => {
            dispatch(Action.components.set(ownProps.componentKey, "sorting", sorting));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(presentation);
