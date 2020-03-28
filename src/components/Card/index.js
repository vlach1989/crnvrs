import React from 'react';
import classnames from 'classnames';
import './style.scss';

class Card extends React.PureComponent {

    render() {
        const classes = classnames("crnvrs-card", {
            "two-col": this.props.col === 2,
            "two-row": this.props.row === 2,
            "three-row": this.props.row === 3,
        });

        return (
            <div className={classes}>
                <div className="crnvrs-card-header">
                    <div className="crnvrs-card-title">
                        {this.props.title}
                        <span>{this.props.subtitle ? (`(${this.props.subtitle})`) : null}</span>
                    </div>
                    {this.props.switch}
                </div>
                <div className="crnvrs-card-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;

const SwitchOption = (props) => {
    const classes = classnames("crnvrs-card-switch-option", {
        "active": props.active,
        "disabled": props.disabled
    });

    return (
        <div className={classes} onClick={props.onClick}>{props.children}</div>
    );
};

export class Switch extends React.PureComponent {
    onOptionClick(option) {
        if (option !== this.props.activeOption) {
            this.props.onChange(option);
        }
    }

    render() {
        return (
            <div className="crnvrs-card-switch">
                {this.props.options && this.props.options.map(option => (
                    <SwitchOption
                        active={this.props.active === option}
                        onClick={this.onOptionClick.bind(this, option)}
                    >
                        {option}
                    </SwitchOption>
                ))}
            </div>
        );
    }
}