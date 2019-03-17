import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
class Header extends Component {
  renderContent() {
    const { auth } = this.props;
    switch (auth) {
      case null:
        return "Loading...";
      case false:
        return (
          <li>
            <a href="/auth/google"> Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="0">
            <Payments />
          </li>,
          <li key="1">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
          >
            KnowMail...
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
