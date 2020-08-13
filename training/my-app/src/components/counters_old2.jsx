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

  handleDelete = () => {};

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value} id={counter.id} />
        ))}
      </div>

      /*on top of the unique DOM element identifier "key" attribute mandatory when
      mapping and creating duplicate components, children components called in the 
      parent component render method can be assigned other attributes that will then 
      become part of the "props" of each initialized/generated child component ; values 
      of these attributes can then be accessed directly from said child component as 
      properties of the object "props" ("props" is a property of class Component) : 
      this.props.attributeNameOfChildComponentAsChosenInParentRenderMethod*/

      /*<div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value}>
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
      
      children JSX elements of a component can be accessed inside said child component
      render method using {this.props.children} inside the intial <div> ; depending on 
      cases, same effect could be achieved adding a new attribute to the component inside 
      the parent render method and then creating the JSX element directly inside the child 
      component render method using <element>{this.props.attributeName}</element> 
      (this.props.children is useful to manage dialogue boxes)*/
    );
  }
}

export default Counters;
