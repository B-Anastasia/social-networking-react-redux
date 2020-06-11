import React from "react";
import styles from "./Post.module.css";
import UserPost from "../../UserPost";
import { IDialogType } from "../../../redux/state";

type PostPropsType = {
  message: string;
  count: number;
  profile: IDialogType;
};

function Post({ message, count, profile }: PostPropsType) {
  return (
    <div className={styles.post}>
      <div className={styles.post__user}>
        <UserPost profile={profile} />
      </div>
      <div className={`${styles.post__content} block`}>{message}</div>
      <div className={styles.post__like}>
        <span>Like {count}</span>
      </div>
    </div>
  );
}

export default Post;
