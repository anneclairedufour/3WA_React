import React, { Component } from 'react';

class Badge extends Component {
    render() {
        return (
            <span className="badge badge-primary badge-pill">{this.props.id}</span>
        );
    }
}

export default Badge;