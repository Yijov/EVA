import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";

import { CurrentProjectContext } from "../context/CurrentProjectContext";
import { AuthenticationContext } from "../context/AuthenticationContext";

function Nav(props) {
  const { setUser, setPasword, setAuth } = useContext(AuthenticationContext);
  const { updateState, resetLocalStorage } = useContext(CurrentProjectContext);

  const handleLogout = () => {
    setUser("");
    setPasword("");
    setAuth(false);
    props.history.push("/login");
  };
  const handleNewProject = () => {
    resetLocalStorage();
    updateState();
  };
  return (
    <div>
      <nav className="main-menu">
        <ul>
          <li>
            <Link to="/">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          <li onClick={handleNewProject}>
            <Link to="/planer">
              <i className="fa fa-bar-chart-o fa-2x"></i>
              <span className="nav-text">New Project</span>
            </Link>
          </li>

          <li>
            <Link to="/instructions">
              <i className="fa fa-info fa-2x"></i>
              <span className="nav-text">Instructions</span>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i className="fa fa-font fa-2x"></i>
              <span className="nav-text">About</span>
            </Link>
          </li>

          {/* <li>
            <Link to="/">
              <i className="fa fa-table fa-2x"></i>
              <span className="nav-text">Generate Budget</span>
            </Link>
          </li> */}

          {/* <li className="has-subnav">
            <Link to="/">
              <i className="fa fa-list fa-2x"></i>
              <span className="nav-text">My projects list (On Dev)</span>
            </Link>
          </li> */}
        </ul>

        <ul className="logout" onClick={handleLogout}>
          <li className="has-subnav">
            <i className="fa fa-sign-out fa-3x"></i>
            <span className="nav-text">Settings (On Dev)</span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default withRouter(Nav);
