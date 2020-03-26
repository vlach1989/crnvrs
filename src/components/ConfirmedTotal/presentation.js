import React from 'react';
import _ from 'lodash';
import Card, {Switch} from "../Card";

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
                title="Total confirmed cases"
            >
                <table className="crnvrs-table">
                    <tr>
                        <th>Country/province</th>
                        <th className="crnvrs-table-column-right">Cases</th>
                    </tr>
                    {this.props.allAreas.map((area, i) =>
                        <tr>
                            <td>{i+1}. {area.data.name}</td>
                            <td className="crnvrs-table-column-right">{area.data.current && area.data.current.toLocaleString()}</td>
                        </tr>
                    )}
                </table>
            </Card>
        );
    }
}

export default ConfirmedChange;