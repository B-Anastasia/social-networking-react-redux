import React from "react";
import styles from './Header.module.css';
import BettercodesLogo from "../../Icons/BettercodesLogo";

 function Header() {
    return (
        <header className={styles.header}>
           <Logo/>
        </header>
    )
}

function Logo() {
    return(
        <div className={styles.header__logo}>
            <BettercodesLogo  width="55" height="55" viewBox="0 0 97.69 97.691" fill='#FF7556'/>
            <span>Social network</span>
        </div>
    )
}


export default Header;