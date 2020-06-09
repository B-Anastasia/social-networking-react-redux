import React from "react";
import styles from "./PostsList.module.css";
import Post from "../Post";
import { v1 } from "uuid";

type IPostType = {
  id: string;
  text: string;
  count: number;
};

function PostsList() {
  let posts: IPostType[] = [
    {
      id: v1(),
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
      count: 10,
    },
    {
      id: v1(),
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
      count: 15,
    },
    {
      id: v1(),
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
      count: 20,
    },
  ];

  const postsList = posts.map((p: IPostType) => (
    <Post key={p.id} message={p.text} count={p.count} />
  ));

  return <div className={styles.posts}>{postsList}</div>;
}

export default PostsList;
