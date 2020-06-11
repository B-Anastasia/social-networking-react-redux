import React from "react";
import NewPost from "./NewPost";
import PostsList from "./PostsList";
import { IProfilePageType } from "../../redux/state";

function MyPosts({ posts, profile }: IProfilePageType) {
  return (
    <div>
      <div className={"header"}>My posts</div>
      <NewPost />
      <PostsList posts={posts} profile={profile} />
    </div>
  );
}

export default MyPosts;
