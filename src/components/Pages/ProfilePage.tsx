import React from "react";
import scss from "./Pages.module.scss";
import MyPostsContainer from "../Posts/MyPostsContainer";

/*type IProfilePagePropsType = {
  // store: Store<CombinedState<IStateType>, Actions>;
  /!*profilePage: IProfilePageType;
    newPostText: string;
    dispatch: Dispatch<Actions>;*!/
};*/

function ProfilePage() {
    return (
        <>
            <div className={scss.profile__posts}>
                <MyPostsContainer/>
            </div>
        </>
    );
}

export default ProfilePage;
