//import React, { Component } from "react";
import React from "react";

/*class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar{" "}
          <span className="bagde badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}*/

/*if the component doesn't have any event handlers, helper methods to
calculate values, STATE... but only a single render method, it is possible 
to turn the component from a class Component (shortcut CC) to a STATELESS 
FUNCTIONNAL COMPONENT using an arrow function (shortcut SFC) ; life cycle hooks 
cannot be used in a SFC

this.props is only functionnal inside a CC, to make it available inside a 
SFC, it will need to be added as an argument to the function : 
const FunctionName = (props) => { <element>{props.propertyName}</element>} OR
const FunctionName = props => { <element>{props.propertyName}</element>}*/

const NavBar = (props) => {
  console.log("NavBar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="bagde badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

/*In the case of multiple references to the props object, to avoid having to 
explicitely call "props.propertyName" too many times and to add clarity to the 
algorythm it is possible to use OBJECT DESTRUCTURING :

BEFORE (SFC)
const FunctionName = (props) => {
  <element>{props.propertyName1}</element>
  <element>{props.propertyName2}</element>
  <element>{props.propertyName3}</element>
}

AFTER (SFC)
const FunctionName = ({ propertyName1, propertyName2, propertyName3 }) => {
  <element>{propertyName1}</element>
  <element>{propertyName2}</element>
  <element>{propertyName3}</element>
}
*/

export default NavBar;
