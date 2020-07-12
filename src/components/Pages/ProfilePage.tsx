import React from "react";
import scss from "./Pages.module.scss";
import { Actions, IStateType } from "../../redux/store";
import { CombinedState, Store } from "redux";
import MyPostsContainer from "../Posts/MyPostsContainer";

type IProfilePagePropsType = {
  store: Store<CombinedState<IStateType>, Actions>;
  /*profilePage: IProfilePageType;
    newPostText: string;
    dispatch: Dispatch<Actions>;*/
};

function ProfilePage({ store }: IProfilePagePropsType) {
  return (
    <>
      <div className={scss.profile__posts}>
        <MyPostsContainer store={store} />
      </div>
    </>
  );
}

export default ProfilePage;
