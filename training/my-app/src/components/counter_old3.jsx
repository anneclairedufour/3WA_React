import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  constructor() {
    super();
    console.log("Constructor", this);
    /*IF EVENT HANDLER IS NOT AN ARROW FUNCTION
    call to "this" in event handler will be undefined if not 
    binded to parent Component "this" in child constructor ;
    "this" must be binded to each event handler separately

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleSomethingElse = this.handleSomethingElse.bind(this);*/
  }

  /*classic event handler method
  handleIncrement() {
    console.log("Increment Clicked", this);
  }*/

  //alternative arrow function to avoid having to bind "this" in child constructor
  handleIncrement = () => {
    console.log("Increment Clicked", this);
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
