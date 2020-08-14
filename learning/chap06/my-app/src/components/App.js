import React, { Component } from 'react';
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import Loader from "./Loader";
import List from "./List";

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
                {this.state.loading === false ? <Loader url={this.qcmUrl} onLoad={this.onLoad} /> : null}
                <NavBar />
                {this.state.data && <MainContent>
                    <List data={this.state.data} />
                </MainContent>}
            </div>
        );
    }
}

export default App;