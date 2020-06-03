import React from "react";
import scss from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className={`block {scss.nav}`}>
      <div className={scss.nav__item}>
        <NavLink to="/profile" activeClassName={scss.active}>
          Profile
        </NavLink>
      </div>
      <div className={scss.nav__item}>
        <NavLink activeClassName={scss.active} to="/dialogs">
          Messages
        </NavLink>
      </div>
      <div className={scss.nav__item}>
        <NavLink activeClassName={scss.active} to="/news">
          News
        </NavLink>
      </div>
      <div className={scss.nav__item}>
        <NavLink activeClassName={scss.active} to="/music">
          Music
        </NavLink>
      </div>
      <div className={scss.nav__item}>
        <NavLink activeClassName={scss.active} to="/settings">
          Settings
        </NavLink>
      </div>
    </nav>
  );
}
export default Navbar;
