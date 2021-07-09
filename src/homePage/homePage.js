import React, { Component } from "react";
import "./homePage.css";

class HomePage extends Component {
  render() {
    return (
      <div className="nav">
        <div className="content">
          <NaveBare classname="home">Home</NaveBare>
          <NaveBare classname="home">Registor</NaveBare>
          <NaveBare classname="home">About Us</NaveBare>
          <NaveBare classname="home">Login</NaveBare>
        </div>
      </div>
    );
  }
}
/*
Nave bar is a class component which returns button
*/

const NaveBare = ({ classname, children, onclick }) => (
  <button type="button" className={classname}>
    {children}
  </button>
);
/*make export default means someone imort is the name you want */
export default HomePage;

