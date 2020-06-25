import React from "react";
import scss from "./Pages.module.scss";
import MyPosts from "../Posts";
import { IProfilePageType } from "../../redux/state";

type IProfilePagePropsType = {
  profilePage: IProfilePageType;
  addNewPost: () => void;
  newPostText: string;
  updateInputValue: (value: string) => void;
};

function ProfilePage({
  profilePage,
  addNewPost,
  newPostText,
  updateInputValue,
}: IProfilePagePropsType) {
  return (
    <>
      {/*<div className={scss.profile__image}>*/}
      {/*  <Profile />*/}
      {/*</div>*/}
      <div className={scss.profile__posts}>
        <MyPosts
          profilePage={profilePage}
          addNewPost={addNewPost}
          newPostText={newPostText}
          updateInputValue={updateInputValue}
        />
      </div>
    </>
  );
}
export default ProfilePage;
