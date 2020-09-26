import React from "react";
import styles from "./Post.module.css";
import {IProfileInfoType} from "../../../types/types";

type PostPropsType = {
  message: string;
  count: number;
  profile: IProfileInfoType | null
};

function Post({ message, count, profile }: PostPropsType) {
    if(profile===null){
        return null
    }
  return (
    <div className={styles.post}>
      <div className={styles.post__user}>
          <div id={profile.userId.toString()} className={styles.user}>
              <div className={styles.user__img}>
                  <img
                      // src="https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"
                      // src={src}
                      src={profile.photos?.small || "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"}
                      alt="user"
                  />
              </div>
              <span className={styles.user__name}>{profile.fullName}</span>
          </div>
      </div>
      <div className={`${styles.post__content} block`}>{message}</div>
      <div className={styles.post__like}>
        <span>Like {count}</span>
      </div>
    </div>
  );
}

export default Post;
