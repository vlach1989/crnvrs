import React from 'react';
import {ScatterChart} from "@gisatcz/ptr-charts";
import {HoverHandler} from "@gisatcz/ptr-core";

class CasesDeathsChart extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.data) {
            return (
                <HoverHandler>
                    <ScatterChart
                        key="casesDeaths"
                        data={this.props.data}
                        defaultSchemePointColors

                        xSourcePath="cases.data.current"
                        ySourcePath="deaths.data.current"
                        nameSourcePath="cases.data.name"
                        keySourcePath="key"

                        innerPaddingLeft={0}
                        height={23}

                        xLabel
                        xValuesSize={4}
                        xScaleType="logarithmic"
                        xOptions={{
                            name: "Confirmed cases",
                            min: 1000,
                            max: 1000000
                        }}

                        yLabel
                        yValuesSize={4.5}
                        yScaleType="logarithmic"
                        yOptions={{
                            name: "Deaths",
                            min: 10,
                            max: 100000
                        }}

                        legend
                    />
                </HoverHandler>
            );
        }

        return null;
    }
}

export default CasesDeathsChart;