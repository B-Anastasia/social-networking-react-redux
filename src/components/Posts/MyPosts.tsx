import React from "react";
import NewPost from "./NewPost";
import PostsList from "./PostsList";
import { IProfilePageType } from "../../index";

function MyPosts({ posts }: IProfilePageType) {
  return (
    <div>
      <div className={"header"}>My posts</div>
      <NewPost />
      <PostsList posts={posts} />
    </div>
  );
}

export default MyPosts;
