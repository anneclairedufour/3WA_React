import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
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

  handleDelete = (counterId) => {
    console.log("Event Handler Called", counterId);

    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    /*filter will return an array containing all previous objects except the one that
    has the same id as the object that needs to be deleted*/

    this.setState({ counters: counters });
    /*if key and value are the same, this.setState({ counters}); can also be used*/
  };

  handleReset = (counterId) => {
    // map through all counters and reset each of them to 0
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });

    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>

      /*KEY and ID props have the same value but as the KEY attribute is an identifier 
      only used internally by React and thus not accessible inside the Counter component,
      the ID props needs to be present as well in order to access counters individually*/

      /*Instead of passing each property of the object counter as seperate attributes/props 
      of the component Counter, it is possible to call directly counter={counter} which will 
      allow better maintenance of algorythm if the counter object was to be modified in the 
      future as the counter object contains all the necessary props:
        <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            id={counter.id}
        />

        (call to props in child component : this.props.attributeName)
          
        becomes :
          
        <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
        />
        
        (call to props in child component : this.props.counter.attributeName)*/
    );
  }
}

export default Counters;
