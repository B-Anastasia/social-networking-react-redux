import React from "react";
import styles from "./UserPost.module.css";
import {IDialogType, IFriendType} from "../../redux/store";

type IUserPostPropsType = {
    profile: IDialogType|IFriendType;
};

function UserPost({profile}: IUserPostPropsType) {
    if (profile === null) {
        return null
    }
    return (
            <div id={profile.id} className={styles.user}>
                <div className={styles.user__img}>
                    <img
                        // src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
                        src={profile.src}
                        alt="user"
                    />
                </div>
                <span className={styles.user__name}>{profile.name}</span>
            </div>
    );
}

export default UserPost;
