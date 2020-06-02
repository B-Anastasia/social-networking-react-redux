import React from "react";
import styles from "./Post.module.css";
import UserPost from "../../UserPost";

type PostPropsType = {
  message: string;
  count: number;
};

function Post({ message, count }: PostPropsType) {
  return (
    <div className={styles.post}>
      <div className={styles.post__user}>
        <UserPost />
      </div>
      <div className={`${styles.post__content} block`}>{message}</div>
      <div className={styles.post__like}>
        <span>Like {count}</span>
      </div>
    </div>
  );
}

export default Post;
