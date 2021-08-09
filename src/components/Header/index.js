import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
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
          <Link to="/logout" className="link">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
