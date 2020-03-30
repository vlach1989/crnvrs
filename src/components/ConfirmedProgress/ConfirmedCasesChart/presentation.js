import React from 'react';
import {LineChart} from "@gisatcz/ptr-charts";
import {HoverHandler} from "@gisatcz/ptr-core";

class ConfirmedCasesChart extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.data) {
            return (
                <HoverHandler>
                    <LineChart
                        key="time-scale-line"

                        data={this.props.data}
                        keySourcePath="key"
                        nameSourcePath="data.name"
                        serieDataSourcePath="data.cases"
                        xSourcePath="day"
                        ySourcePath="value"

                        isSerie

                        xValuesSize={1.8}
                        xOptions={{
                            name: "Day"
                        }}

                        yScaleType="logarithmic"
                        yValuesSize={4}
                        yOptions={{
                            name: "Confirmed cases",
                            min: 1000,
                            max: 1000000,
                            unit: "cases"
                        }}

                        sorting={[["day", "asc"]]}

                        height={21}

                        legend
                        withPoints={true}
                        pointOptions={{
                            showOnHover: true
                        }}
                    />
                </HoverHandler>
            );
        }

        return null;
    }
}

export default ConfirmedCasesChart;