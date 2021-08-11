import React from "react";
import { Link, withRouter } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

const Header = (props) => {
  const { history } = props;
  const onClickLogout = () => {
    Cookies.remove("jwt_token");
    history.replace("/");
  };
  return (
    <div>
      <div className="main-container1">
        <h1 className="heading1">Banking Application</h1>
        <div className="links">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/account" className="link">
            Account
          </Link>
          <Link to="/profile" className="link">
            Profile
          </Link>
          <button type="button" className="button1" onClick={onClickLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
