import React from 'react';
import classnames from 'classnames';
import './style.scss';

class Card extends React.PureComponent {

    render() {
        const classes = classnames("crnvrs-card", {
            "two-col": this.props.col === 2
        });

        return (
            <div className={classes}>
                <div className="crnvrs-card-header">
                    <div className="crnvrs-card-title">
                        {this.props.title}
                        <span>{this.props.subtitle ? (`(${this.props.subtitle})`) : null}</span>
                    </div>
                    <div className="crnvrs-card-tools"></div>
                </div>
                <div className="crnvrs-card-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;