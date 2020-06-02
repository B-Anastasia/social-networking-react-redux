import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav block">
      <div>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        <Link to="/dialogs">Messages</Link>
      </div>
      <div>
        <Link to="/news">News</Link>
      </div>
      <div>
        <Link to="/music">Music</Link>
      </div>
      <div>
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  );
}
export default Navbar;
