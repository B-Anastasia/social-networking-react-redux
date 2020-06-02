import React from "react";
import styles from './User.module.css';


function User() {
    return (
        <div className={styles.user}>
            <div className={styles.user_sm}>
                <div className={styles.user__img}>
                    <img
                        src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
                        alt="user"/>
                </div>
                <span className={styles.user__name}>Dan Fox</span>
            </div>
        </div>
    )
}

export default  User;