import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
  };

  /*styles = {
    fontSize: 20, //px implied
    fontWeight: "bold",
  };
  
  render() {
    return (
        <div>
        <span style={this.styles}></span>
      </div>
    );
  }*/

  render() {
    return (
      /*instead of returning a parent <div> containing children elements, it is 
      possible to use <React.Fragment> to return the children elements directly*/
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      /*the key attribute is a unique internal identifier mandatory for React to be 
      able to identify which DOM element has changed and needs to be updated when 
      mapping an array and duplicating elements*/
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
