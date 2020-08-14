import React, { Component } from 'react';

class Loader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadedJson: false
        };
    }

    startLoading() {
        fetch(this.props.url)
            .then(
                (response) => {
                    return response.json();
                })
            .then(json => {
                this.setState({
                    loadedJson: true
                });

                console.log("Json", json);

                this.props.onLoad(true, json);
            });
    }

    componentDidMount() {
        this.startLoading();
    }

    render() {
        return (
            <div className="container">
                <div id="loader-1" className="loader"></div>
            </div>
        )
    }
}

export default Loader;