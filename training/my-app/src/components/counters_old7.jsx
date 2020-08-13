import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset All
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrease={this.props.onIncrease}
            onDecrease={this.props.onDecrease}
            onDelete={this.props.onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }

  /*In the case of multiple references to the props object, to avoid having to 
  explicitely call "this.props.propertyName" too many times and to add clarity to 
  the algorythm it is possible to use OBJECT DESTRUCTURING :

  BEFORE (CC)
  class ClassName extends Component {
    render() {
      return (
        <div>
          <element>{this.props.propertyName1}</element>
          <element>{this.props.propertyName2}</element>
          <element>{this.props.propertyName3}</element>
        </div>
      );
    }
  }

  AFTER (CC)
  class ClassName extends Component {
    const { propertyName1, propertyName2, propertyName3 } = this.props;
    //all these properties come from this.props

    render() {
      return (
        <div>
          <element>{propertyName1}</element>
          <element>{propertyName2}</element>
          <element>{propertyName3}</element>
        </div>
      );
    }
  }*/
}

export default Counters;
