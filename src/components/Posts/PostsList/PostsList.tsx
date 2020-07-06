import React from "react";
import styles from "./PostsList.module.css";
import Post from "../Post";
import { IDialogType, IPostType } from "../../../redux/store";

type PostsListPropsType = {
  posts: Array<IPostType>;
  profile: IDialogType;
};

function PostsList(props: PostsListPropsType) {
  const postsList = props.posts.map((p: IPostType) => (
    <Post key={p.id} message={p.text} count={p.count} profile={props.profile} />
  ));

  return <div className={styles.posts}>{postsList}</div>;
}

export default PostsList;
