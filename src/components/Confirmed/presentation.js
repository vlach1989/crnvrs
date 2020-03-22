import React from 'react';
import {Select} from '@gisatcz/ptr-atoms';
import ConfirmedCasesChart from "./ConfirmedCasesChart";

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
}];

class Confirmed extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
          threshold: thresholdOptions[1]
        };

        this.onThresholdChange = this.onThresholdChange.bind(this);
    }

    onThresholdChange(threshold) {
        this.setState({
            threshold
        });
    }

    render() {
        return (
            <>
                <h1>Confirmed cases</h1>
                <Select
                    value={this.state.threshold}
                    optionLabel="label"
                    optionValue="key"
                    options={thresholdOptions}
                    onChange={this.onThresholdChange}
                />
                <ConfirmedCasesChart
                    threshold={this.state.threshold.label}
                    countries={["Czechia", "Germany", "US_California", "Italy", "Norway", "Japan", "United Kingdom_United Kingdom", "US_New York"]}
                />
            </>
        );
    }
}

export default Confirmed;