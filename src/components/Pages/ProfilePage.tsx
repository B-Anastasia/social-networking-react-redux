import React from "react";
import scss from "./Pages.module.scss";
import MyPosts from "../Posts";
import { IProfilePageType } from "../../redux/state";

type IProfilePagePropsType = {
  profilePage: IProfilePageType;
};

function ProfilePage({ profilePage }: IProfilePagePropsType) {
  const { posts, profile } = profilePage;
  return (
    <>
      {/*<div className={scss.profile__image}>*/}
      {/*  <Profile />*/}
      {/*</div>*/}
      <div className={scss.profile__posts}>
        <MyPosts posts={posts} profile={profile} />
      </div>
    </>
  );
}
export default ProfilePage;
