import React from 'react';
import _ from 'lodash';
import Card, {Switch} from "../Card";

class CasesWorldwide extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card
                title="Cases worldwide"
            >
                {this.props.cases ? this.renderContent() : null}
            </Card>
        );
    }

    renderContent() {
        const data = this.props.cases;
        const dailyChangeAbs = data.current - data.previousDay;
        const dailyChangeRel = dailyChangeAbs*100/data.current;

        const weeklyChangeAbs = data.current - data.weekBefore;
        const weeklyChangeRel = weeklyChangeAbs*100/data.current;

        return (
            <div className="crnvrs-overview">
                <div className="crnvrs-overview-title">
                    {data.current.toLocaleString()}
                </div>
                <div className="crnvrs-overview-subtitle">
                    <em>{`+${dailyChangeRel.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})}`} %</em> daily change
                </div>
                <div className="crnvrs-overview-subtitle">
                    <em>{`+${weeklyChangeRel.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})}`} %</em> weekly change
                </div>
            </div>
        );
    }
}

export default CasesWorldwide;