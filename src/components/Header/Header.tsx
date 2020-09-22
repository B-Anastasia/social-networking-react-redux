import React from "react";
import styles from "./Header.module.scss";
import {NavLink} from "react-router-dom";
import Logo from "./Logo/Logo";

type IHeaderPropsType={
    isAuth:boolean
    login:string|null
    id: number|null
}

function Header(props:IHeaderPropsType) {
    let login=props.isAuth
        ?<NavLink to={'/profile/'+props.id}>{props.login}</NavLink>
        : <NavLink to={'/login'}>Login</NavLink>

  return (
    <header className={styles.header}>
      <div className={"container "+styles.header__body}>
        <Logo />
        <div className={styles.login}>
            {login}
        </div>
      </div>
    </header>
  );
}

export default Header;
