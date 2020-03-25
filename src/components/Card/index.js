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

export class Switch extends React.PureComponent {
    onOptionClick(props) {
        if (!props.active) {
            this.props.onChange(props.optionKey);
        }
    }

    render() {
        return (
            <div className="crnvrs-card-switch">
                {React.Children.map(this.props.children, child => React.cloneElement(child, {onClick: this.onOptionClick.bind(this, child.props)}))}
            </div>
        );
    }
}

export const SwitchOption = (props) => {
    const classes = classnames("crnvrs-card-switch-option", {
       "active": props.active,
       "disabled": props.disabled
    });

    return (
        <div className={classes} onClick={props.onClick}>{props.children}</div>
    );
};