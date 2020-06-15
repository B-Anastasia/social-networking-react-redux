import React from "react";
import NewText from "./NewPost";
import PostsList from "./PostsList";
import { IProfilePageType } from "../../redux/state";

function MyPosts({ posts, profile }: IProfilePageType) {
  return (
    <div>
      <div className={"header"}>My posts</div>
      <NewText />
      <PostsList posts={posts} profile={profile} />
    </div>
  );
}

export default MyPosts;
