import React, { Component } from 'react';
import Title from "./Title";

class List extends Component {
    render() {
        return (
            /*<ul className="list">
                {this.props.data.qcm.map((qcm, index) => {
                    return <li key={index} index={index} className={liClass} onMouseOver={this.handleHover} onMouseOut={this.handleHover}>
                        <Title title={qcm.title} />
                        <Badge id={qcm.badge} />
                    </li>
                })}
            </ul>*/

            <ul className="list">
                {this.props.data.qcm.map((qcm, index) => {
                    return <Title title={qcm.title} qcm={qcm} key={index} />
                })}
            </ul>
        )
    }
}

export default List;