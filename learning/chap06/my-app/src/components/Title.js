import React, { Component } from 'react';
import Badge from "./Badge";
import PropTypes from 'prop-types';

class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hover: false
        }
    }

    handleHover = (event) => {
        if (event.type === "mouseover") {
            this.setState({
                hover: true
            })
        }
        else {
            this.setState({
                hover: false
            })
        }
    }

    render() {
        let qcm = this.props.qcm;

        let liClass = this.state.hover ? "li-hover" : "li-default";

        return (
            <li key={qcm.index} index={qcm.index} className={liClass} onMouseOver={this.handleHover} onMouseOut={this.handleHover}>
                <h2>{this.props.title}</h2>
                <Badge id={qcm.badge} />
            </li>
        );
    }
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

Title.defaultProps = {
    title: "No Title"
}

export default Title;