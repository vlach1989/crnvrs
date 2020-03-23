import React from 'react';
import './style.scss';

class Card extends React.PureComponent {

    render() {
        return (
            <div className="crnvrs-card">
                <h3>{this.props.title}</h3>
                <h4>{this.props.subtitle}</h4>
                <div className="crnvrs-card-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;