import React from 'react';
import _ from 'lodash';
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
},{
    key: "1000",
    label: 1000
}];

class Confirmed extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
          selectedAreas: ["Czechia", "Italy", "Norway", "US_New York", "Spain", "Korea, South"],
          threshold: thresholdOptions[2]
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
            <>
                {/*<Select*/}
                {/*    value={this.state.threshold}*/}
                {/*    optionLabel="label"*/}
                {/*    optionValue="key"*/}
                {/*    options={thresholdOptions}*/}
                {/*    onChange={this.onThresholdChange}*/}
                {/*/>*/}
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
            </>
        );
    }
}

export default Confirmed;