import React from "react";
import scss from "./ProfilePage.module.scss";
import MyPosts from "../Posts";
import Profile from "./Profile";

function ProfilePage() {
  return (
    <>
      <div className={scss.profile__image}>
        <Profile />
      </div>
      <div className={scss.profile__posts}>
        <MyPosts />
      </div>
    </>
  );
}
export default ProfilePage;
