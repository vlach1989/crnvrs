import React from 'react';
import _ from 'lodash';
import Card, {Switch, SwitchOption} from "../Card";

class ConfirmedChange extends React.PureComponent {

    constructor(props) {
        super(props);
        this.onContentChange = this.onContentChange.bind(this);
    }

    onContentChange() {
        // TODO
    }

    render() {
        return (
            <Card
                title="Cases"
                switch={
                    <Switch
                        onChange={this.onContentChange}
                    >
                        <SwitchOption optionKey="total" active>Total</SwitchOption>
                        <SwitchOption optionKey="perCapita" disabled>Per capita</SwitchOption>
                    </Switch>
                }
            >
                <table className="crnvrs-table">
                    <tr>
                        <th>Country/province</th>
                        <th className="crnvrs-table-column-right">Cases</th>
                    </tr>
                    {this.props.allAreas.map((area, i) =>
                        <tr>
                            <td>{i+1}. {area.data.name}</td>
                            <td className="crnvrs-table-column-right">{area.data.currentCases.toLocaleString()}</td>
                        </tr>
                    )}
                </table>
            </Card>
        );
    }
}

export default ConfirmedChange;