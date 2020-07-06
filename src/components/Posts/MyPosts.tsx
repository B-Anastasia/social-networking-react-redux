import React from "react";
import NewPost from "./NewPost";
import PostsList from "./PostsList";
import { IActionType, IProfilePageType } from "../../redux/store";

type PropsTypes = {
  profilePage: IProfilePageType;
  newPostText: string;
  dispatch: (action: IActionType) => void;
};

function MyPosts({ profilePage, newPostText, dispatch }: PropsTypes) {
  const { posts, profile } = profilePage;
  return (
    <div>
      <div className={"header"}>My posts</div>
      <NewPost newPostText={newPostText} dispatch={dispatch} />
      <PostsList posts={posts} profile={profile} />
    </div>
  );
}

export default MyPosts;
