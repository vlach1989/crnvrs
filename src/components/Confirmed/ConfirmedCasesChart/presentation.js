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
                        pointRadius={3}

                        xValuesSize={1.8}
                        xOptions={{
                            name: "Day"
                        }}

                        yScaleType="logarithmic"
                        yValuesSize={3.8}
                        yTitle
                        yOptions={{
                            name: "Confirmed cases",
                            min: 100,
                            max: 100000,
                            unit: "cases"
                        }}

                        sorting={[["day", "asc"]]}

                        height={30}
                        minWidth={10}

                        legend
                        withPoints={true}
                        pointOptions={{
                            radius: 4,
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