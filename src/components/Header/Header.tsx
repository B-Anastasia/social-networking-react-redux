import React from "react";
import styles from "./Header.module.scss";
import { ChatBubblesWithEllipsis } from "../../Icons";

function Header() {
  return (
    <header className={styles.header}>
      <div className={"container"}>
        <Logo />
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
