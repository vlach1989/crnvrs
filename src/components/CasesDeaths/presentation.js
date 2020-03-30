import React from 'react';
import CasesDeathsChart from "./CasesDeathsChart";
import Card from "../Card";

class ConfirmedProgress extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            selectedAreas: ["Austria", "Czechia", "Germany", "Italy", "Norway", "Spain", "US", "Sweden", "France", "United Kingdom"],
        };
    }

    render() {
        return (
            <Card
                title="Confirmed cases vs. deaths"
                col={2}
                row={3}
            >
                <CasesDeathsChart
                    countries={this.state.selectedAreas}
                />
            </Card>
        );
    }
}

export default ConfirmedProgress;