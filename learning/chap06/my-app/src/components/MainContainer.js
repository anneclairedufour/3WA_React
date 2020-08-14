import React, { Component } from "react";
import SideBar from "./SideBar";
import Content from "./Content";

class MainContainer extends Component {
    render() {
        return (
            <main className="maincontainer">
                <SideBar data={this.props.data} />
                <Content />
            </main>
        )
    }
}

export default MainContainer;