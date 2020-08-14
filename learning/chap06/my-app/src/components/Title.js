import React, { Component } from 'react';

class Title extends Component {
    render() {
        let title = this.props.title;

        return (
            <h2>{title}</h2>
        );
    }
}

export default Title;