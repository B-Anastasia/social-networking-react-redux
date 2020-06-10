import React from "react";
import styles from "./PostsList.module.css";
import Post from "../Post";
import { IPostType, IProfilePageType } from "../../../index";

function PostsList(props: IProfilePageType) {
  const postsList = props.posts.map((p: IPostType) => (
    <Post key={p.id} message={p.text} count={p.count} />
  ));

  return <div className={styles.posts}>{postsList}</div>;
}

export default PostsList;
