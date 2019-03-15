import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">knowmail</a>
          <ul className="right">
            <li>
              <a href="">Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
