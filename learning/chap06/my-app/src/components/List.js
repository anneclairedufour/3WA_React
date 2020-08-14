import React, { Component } from 'react';
import Title from "./Title";
import Badge from "./Badge";
import PropTypes from 'prop-types';

class List extends Component {
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
        let titleClass = this.state.hover ? "title-hover" : "title-default";

        return (
            <ul className="list">
                {this.props.data.qcm.map((qcm, index) => {
                    return <li key={index} index={index} className={titleClass} onMouseOver={this.handleHover} onMouseOut={this.handleHover}>
                        <Title title={qcm.title} />
                        <Badge id={qcm.badge} />
                    </li>
                })}
            </ul>
        )
    }
}

Title.propTypes = {
    title: PropTypes.string.isRequired
}

Title.defaultProps = {
    title: "title"
}

export default List;