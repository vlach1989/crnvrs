import React from 'react';
import _ from 'lodash';
import Card, {Switch, SwitchOption} from "../Card";

class ConfirmedTotal extends React.PureComponent {

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
                title="Change"
                switch={
                    <Switch
                        onChange={this.onContentChange}
                    >
                        <SwitchOption optionKey="Daily" active>Daily</SwitchOption>
                        <SwitchOption optionKey="Weekly" disabled>Weekly</SwitchOption>
                    </Switch>
                }
            >
                <table className="crnvrs-table">
                    <tr>
                        <th>Country/province</th>
                        <th className="crnvrs-table-column-right">Change</th>
                    </tr>
                    {this.props.allSortedByChange.map((area, i) =>
                        <tr>
                            <td>{i+1}. {area.data.name}</td>
                            <td className="crnvrs-table-column-right">{area.data.changedDaily.toLocaleString()}</td>
                        </tr>
                    )}
                </table>
            </Card>
        );
    }
}

export default ConfirmedTotal;