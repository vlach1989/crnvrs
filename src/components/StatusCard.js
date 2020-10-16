import React from 'react';
import classnames from 'classnames';
import _ from 'lodash';
import Card, {Switch} from "./Card";

class StatusCard extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card
                title={this.props.title}
            >
                {this.props.data ? this.renderContent() : null}
            </Card>
        );
    }

    renderContent() {
        const data = this.props.data && this.props.data.data;

        if (data) {
            const dailyChangeAbs = data.yesterday - data.previousDay;
            const dailyChangeRel = dailyChangeAbs*100/data.previousDay;

            const tenDaysChangeAbs = data.yesterday - data.tenDaysBefore;
			const tenDaysChangeRel = tenDaysChangeAbs*100/data.tenDaysBefore;

			const dailyClasses = classnames("", {
				"positive": dailyChangeAbs > 0
			});

			const tenDaysClasses = classnames("", {
				"positive": tenDaysChangeAbs > 0
			});

            return (
                <div className="crnvrs-overview">
                    <div className="crnvrs-overview-title">
                        {data.yesterday.toLocaleString()}
				</div>
                    <div className="crnvrs-overview-subtitle">
                        <em className={dailyClasses}>{`${dailyChangeRel >= 0 ? "+" : ""}${dailyChangeRel.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})}`} %</em> vs. previous day
                    </div>
                    <div className="crnvrs-overview-subtitle">
                        <em className={tenDaysClasses}>{`${tenDaysChangeRel >= 0 ? "+" : ""}${tenDaysChangeRel.toLocaleString(undefined, {minimumFractionDigits: 1, maximumFractionDigits: 1})}`} %</em> vs. 10 days ago
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default StatusCard;