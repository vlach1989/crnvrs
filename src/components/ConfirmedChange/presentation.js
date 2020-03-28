import React from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import Card, {Switch} from "../Card";

class ConfirmedTotal extends React.PureComponent {

    constructor(props) {
        super(props);
        this.onContentChange = this.onContentChange.bind(this);
    }

    onContentChange(activeContentOption) {
        this.props.setActiveContentOption(activeContentOption);
        this.onOrderChange(activeContentOption);
    }

    onOrderChange(content, column, order) {
        const values = this.props.sorting[0].split(".");
        const ordering = this.props.sorting[1];
        const contentString = content || values[1];
        const columnString = column || values[2];
        const orderString = ordering || order;

        this.props.setSorting([`data.${contentString}.${columnString}`, orderString]);
    }

    render() {
        const values = this.props.sorting[0].split(".");
        const activeColumn = values[2];

        const absClass = classnames("crnvrs-table-column-right sortable", {
            active: activeColumn === "abs"
        });

        const relClass = classnames("crnvrs-table-column-right sortable", {
            active: activeColumn === "rel"
        });

        return (
            <Card
                title="Change"
                row={3}
                switch={
                    <Switch
                        onChange={this.onContentChange}
                        options={this.props.contentOptions}
                        active={this.props.activeContentOption}
                    />
                }
            >
                <table className="crnvrs-table">
                    <tr>
                        <th>Country/province</th>
                        <th onClick={this.onOrderChange.bind(this, null, 'abs', null)} className={absClass}>Abs</th>
                        <th onClick={this.onOrderChange.bind(this, null, 'rel', null)} className={relClass}>%</th>
                    </tr>
                    {this.props.allSortedByComponent.map((area, i) => {
                        let absChangeValue = area.data[this.props.activeContentOption].abs;
                        let relChangeValue = area.data[this.props.activeContentOption].rel;

                        const relClasses = classnames("crnvrs-table-column-right", {
                            red: relChangeValue > 0
                        });

                        return (
                            <tr>
                                <td>{i+1}. {area.data.name}</td>
                                <td className="crnvrs-table-column-right">{absChangeValue && absChangeValue.toLocaleString()}</td>
                                <td className={relClasses}>{relChangeValue && relChangeValue.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})}</td>
                            </tr>
                        );
                    }
                    )}
                </table>
            </Card>
        );
    }
}

export default ConfirmedTotal;