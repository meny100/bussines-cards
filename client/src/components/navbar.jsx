import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  
  render() {
    const { user } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
        <div className="container">
          <Link
            className="nav-item nav-link text-secondary font-weight-bold"
            to="/"
          >
            Home Page
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-item nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                {user?.biz && (
                  <NavLink className="nav-item nav-link" to="/my-cards">
                    My Cards
                  </NavLink>
                )}
              </li>

              {user && !user.biz && (
                <React.Fragment>
                  <li>
                    <NavLink className="nav-item nav-link" to="/all-cards">
                      All Cards
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-item nav-link" to="/favorites">
                      Favorites
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
            </ul>
            <ul className="navbar-nav ml-auto">
              {!user && (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-item nav-link" to="/signin">
                      Signin
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-item nav-link" to="/signup">
                      Signup
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-item nav-link" to="/biz-signup">
                      Business
                    </NavLink>
                  </li>
                </React.Fragment>
              )}

              {user && (
                <React.Fragment>
                  <li className="nav-item">
                    <NavLink className="nav-item nav-link" to="/logout">
                      Logout
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="nav-item nav-link" to="/edit-user">
                      Edit User
                    </NavLink>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
