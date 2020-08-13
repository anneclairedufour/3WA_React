import React, { Component } from "react";

class Counter extends Component {
  /*React provides LIFECYCLE HOOKS, methods that get called automatically 
  at each point in the lifecycle, that give you good control of what happens 
  at the point it is invoked.*/

  /*componentDidMount is called after the component is rendered into the DOM,
  it is the best place to make Ajax calls and get data from the server*/
  componentDidMount() {
    console.log("Counter - Mounted");

    //some Ajax call
    //this.setState({})

    /*this.timer = setInterval(
      () => {
        this.setState({
            something: newValue,
        })
    }, 1000)*/
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Counter - Updated");

    console.log("PrevProps", prevProps);
    console.log("PrevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call to get new data from server
    }
  }

  /*componentWillUnmount is called before removing the component from the DOM 
  can be used to clean up timers, event listeners... in order to avoid memory 
  leaks*/
  componentWillUnmount() {
    console.log("Counter - Unmount");

    //clearInterval(this.timer);
  }

  render() {
    console.log("Counter - Rendered");

    return (
      <div>
        <h4>Button #{this.props.counter.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrease(this.props.counter)}
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrease(this.props.counter)}
          className="btn btn-secondary btn-sm m-1"
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
