import React from 'react';
import _ from 'lodash';
import {Select} from '@gisatcz/ptr-atoms';
import ConfirmedCasesChart from "./ConfirmedCasesChart";
import Card from "../Card";

const thresholdOptions = [{
    key: "1",
    label: 1
},{
    key: "20",
    label: 20
},{
    key: "100",
    label: 100
},{
    key: "500",
    label: 500
},{
    key: "1000",
    label: 1000
}];

class ConfirmedProgress extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
          selectedAreas: ["Spain", "Italy", "Czechia", "US", "Norway"],
          threshold: thresholdOptions[4]
        };

        this.onAreaChange = this.onAreaChange.bind(this);
        this.onThresholdChange = this.onThresholdChange.bind(this);
    }

    onAreaChange(selectedOptions) {
        const keys = selectedOptions.map(option => option.key);
        const sorted = _.sortBy(keys);

        this.setState({
           selectedAreas: sorted
        });
    }

    onThresholdChange(threshold) {
        this.setState({
            threshold
        });
    }

    render() {
        return (
            <Card
                title="Confirmed cases progress"
                subtitle="from the day with at least 1000 cases"
                col={2}
                row={3}
            >
                <Select
                    value={this.state.selectedAreas}
                    optionLabel="data.name"
                    optionValue="key"
                    options={this.props.allAreas}
                    multi
                    onChange={this.onAreaChange}
                    clearable={false}
                />
                <ConfirmedCasesChart
                    threshold={this.state.threshold.label}
                    countries={this.state.selectedAreas}
                />
            </Card>
        );
    }
}

export default ConfirmedProgress;