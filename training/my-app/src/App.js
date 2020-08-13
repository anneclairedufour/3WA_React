//import React from "react";
import React, { Component } from "react";
//import logo from './logo.svg';
import NavBar from "./components/navbar";
import "./App.css";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
    /*this.props is only accessible if passed as parameter of 
    constructor and super*/

    /*state can be initialized here
    this.state = this.props.something*/
  }

  /*React provides LIFECYCLE HOOKS, methods that get called automatically 
  at each point in the lifecycle, that give you good control of what happens 
  at the point it is invoked.*/

  /*componentDidMount is called after the component is rendered into the DOM,
  it is the best place to make Ajax calls and get data from the server*/
  componentDidMount() {
    console.log("App - Mounted");

    //some Ajax call
    //this.setState({})
  }

  handleIncrease = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters });
    /* setState can only be called when a component is rendered 
    and placed in the DOM */
  };

  handleDecrease = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value > 0
      ? counters[index].value--
      : (counters[index].value = 0);
    console.log(this.state.counters[index]);
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );

    this.setState({ counters });
  };

  handleReset = (counterId) => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  };

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrease={this.handleIncrease}
            onDecrease={this.handleDecrease}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
