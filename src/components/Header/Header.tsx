import React from "react";
import styles from "./Header.module.scss";
import { ChatBubblesWithEllipsis } from "../../Icons";
import {NavLink} from "react-router-dom";

type IHeaderPropsType={
    isAuth:boolean
    login:string|null
    id: number|null
}

function Header(props:IHeaderPropsType) {
    console.log(props)
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

function Logo() {
  return (
    <div className={styles.header__logo}>
      <ChatBubblesWithEllipsis
        width="65"
        height="65"
        viewBox="0 0 30.743 30.744"
        // viewBox="0 0 97.69 97.691"
        // fill="#FF7556"
        fill="#0af"
      />
      <span>Social network</span>
    </div>
  );
}

export default Header;
