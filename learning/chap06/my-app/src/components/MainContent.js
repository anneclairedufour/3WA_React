import React, { Component } from "react";

class MainContent extends Component {
    render() {
        return (
            <div className="maincontent">
                {this.props.children}
            </div>
        )
    }
}

export default MainContent;