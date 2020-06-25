import React from "react";
import NewPost from "./NewPost";
import PostsList from "./PostsList";
import { IProfilePageType } from "../../redux/state";

type PropsTypes = {
  profilePage: IProfilePageType;
  addNewPost: () => void;
  newPostText: string;
  updateInputValue: (value: string) => void;
};

function MyPosts({
  profilePage,
  addNewPost,
  newPostText,
  updateInputValue,
}: PropsTypes) {
  const { posts, profile } = profilePage;
  return (
    <div>
      <div className={"header"}>My posts</div>
      <NewPost
        addNewPost={addNewPost}
        newPostText={newPostText}
        updateInputValue={updateInputValue}
      />
      <PostsList posts={posts} profile={profile} />
    </div>
  );
}

export default MyPosts;
