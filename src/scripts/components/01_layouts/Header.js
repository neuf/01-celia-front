/*******
 * REACT IMPORTS
 ******/
import React, { Component } from "react";
import { Link } from "react-router-dom";

/*******
 * COMPONENTS IMPORTS
 ******/
import Navigation from "../00_ui/Navigation"

/*******
 * COMPONENT
 ******/
export default class Header extends Component {

  /**
   * @method
   * @name render
   */
  render() {
    return (
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src="../assets/images/icons/logo.svg" alt="Logo du site"/>
          </Link>
        </div>
        <Navigation></Navigation>
      </header>
    );
  }
};
