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
                        serieDataSourcePath="data.data"
                        xSourcePath="isoDate"
                        ySourcePath="confirmed"

                        isSerie
                        pointRadius={3}

                        xScaleType="time"
                        xValuesSize={5}
                        xOptions={{
                            name: "Time",
                            axisValueFormat: "DD MM YYYY",
                            popupValueFormat: "DD MM YYYY"
                        }}

                        yScaleType="logarithmic"
                        yValuesSize={5}
                        yTitle
                        yOptions={{
                            name: "Confirmed cases",
                            min: 1,
                            max: 100000
                        }}

                        sorting={[["isoDate", "asc"]]}

                        legend
                        withPoints={false}
                    />
                </HoverHandler>
            );
        }

        return null;
    }
}

export default ConfirmedCasesChart;