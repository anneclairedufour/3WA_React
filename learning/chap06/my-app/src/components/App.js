import React, { Component } from 'react';
import NavBar from "./NavBar";
import MainContainer from "./MainContainer";
import Loader from "./Loader";

class App extends Component {
    constructor(props) {
        super(props);

        this.qcmUrl = "./data/qcm.json";

        this.state = {
            loading: false,
            data: null,
        };

        this.onLoad = this.onLoad.bind(this);
    }

    onLoad(status, json) {
        this.setState({
            loading: status,
            data: json
        });
    }

    render() {
        console.log("App - Rendered");
        console.log("this.state.loading", this.state.loading);
        console.log("this.state.data", this.state.data);

        return (
            <div className="app">
                <header><NavBar /></header>
                {this.state.loading === false ? <Loader url={this.qcmUrl} onLoad={this.onLoad} /> : null}
                {this.state.data && <MainContainer data={this.state.data} />}
            </div>
        );
    }
}

export default App;