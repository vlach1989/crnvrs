import {connect} from '@gisatcz/ptr-state';
import Select from '../../state/Select';
import Action from "../../state/Action";
import presentation from './presentation';

const mapStateToProps = (state, ownProps) => {
    return {
        allSortedByComponent: Select.specific.confirmedCases.getAllSortedByComponent(state, ownProps.componentKey),
        contentOptions: Select.components.get(state, ownProps.componentKey, "contentOptions"),
        activeContentOption: Select.components.get(state, ownProps.componentKey, "activeContentOption"),
        order: Select.components.get(state, ownProps.componentKey, "order")
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setActiveContentOption: (activeContentOption) => {
            dispatch(Action.components.set(ownProps.componentKey, "activeContentOption", activeContentOption))
        },
        setOrder: (order) => {
            dispatch(Action.components.set(ownProps.componentKey, "order", order));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(presentation);
