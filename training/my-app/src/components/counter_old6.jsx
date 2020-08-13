import React, { Component } from "react";

class Counter extends Component {
  /*PROPS includes read-only data that is passed to a component (through parent 
  component render method) and cannot be changed from within said child component
  
  STATE includes data that is local or private to a component ; it is called only 
  once when an instance of the Counter component is being created but can be modified 
  later on by calling the setState method inherited from the Component class
  
  if the value of a property of this.props needs to change during the life cycle of 
  the component, it will need to be placed inside the object state to become read-and-write*/

  state = {
    //value: this.props.value,
    value: this.props.counter.value,
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  /*the component that owns a piece of the state should be the one modifying it ;
  if we want to delete a child Counter component, it will have to be done through 
  the parent Counters component (the counters list is part of the read-only state 
  property of the Counters component); a new props will need to be added to the child 
  component inside the parent component render method referencing the name of the 
  method called with the onClick event handler on the JSX element rendered in the 
  child component : onClick={this.props.onDelete} for rendered button in child component 
  so the new props of the rendered Counter component in parent component will be 
  onDelete={this.handleDelete} (the child component event handler name = the parent 
  component event handler name accessible through the child component props object)*/

  onDelete() {}

  render() {
    console.log("props", this.props);

    return (
      <div>
        <h4>Button #{this.props.id}</h4>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
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
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
