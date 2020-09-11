import styles from "./Logo.module.scss";
import React from "react";
import {ChatBubblesWithEllipsis} from "../../../Icons";

export default function Logo() {
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
