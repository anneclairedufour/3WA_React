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

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter key={counter.id} value={counter.value} selected={true} />
        ))}
      </div>

      /*on top of the unique internal DOM element identifier "key" attribute mandatory when
      mapping and creating duplicate elements, children components called in the parent 
      component render method can be assigned other attributes that will then become part 
      of the "props" of each initialized/generated child component ; values of these 
      attributes can then be accessed directly in the render method of said child component 
      as properties of the object "props" (class property of child component)*/
    );
  }
}

export default Counters;
