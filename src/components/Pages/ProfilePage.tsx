import React, { Dispatch } from "react";
import scss from "./Pages.module.scss";
import MyPosts from "../Posts";
import { Actions, IProfilePageType } from "../../redux/store";

type IProfilePagePropsType = {
  profilePage: IProfilePageType;
  newPostText: string;
  dispatch: Dispatch<Actions>;
};

function ProfilePage({
  profilePage,
  newPostText,
  dispatch,
}: IProfilePagePropsType) {
  return (
    <>
      <div className={scss.profile__posts}>
        <MyPosts
          profilePage={profilePage}
          newPostText={newPostText}
          dispatch={dispatch}
        />
      </div>
    </>
  );
}
export default ProfilePage;
