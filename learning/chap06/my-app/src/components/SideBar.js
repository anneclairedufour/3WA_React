import React, { Component } from "react";
import List from "./List";

class SideBar extends Component {
    render() {
        return (
            <div className="sidebar">
                <List data={this.props.data} />
            </div>
        )
    }
}

export default SideBar;