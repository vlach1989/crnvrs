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
                        nameSourcePath="key"
                        serieDataSourcePath="data.cases"
                        xSourcePath="day"
                        ySourcePath="value"

                        isSerie
                        pointRadius={3}

                        xValuesSize={2}
                        xOptions={{
                            name: "Time"
                        }}

                        yScaleType="logarithmic"
                        yValuesSize={5}
                        yTitle
                        yOptions={{
                            name: "Confirmed cases",
                            min: 1,
                            max: 100000
                        }}

                        sorting={[["day", "asc"]]}

                        width={60}
                        height={30}

                        legend
                        withPoints={true}
                    />
                </HoverHandler>
            );
        }

        return null;
    }
}

export default ConfirmedCasesChart;