import React from "react";
import scss from "../Pages/Pages.module.scss";
import MyPostsContainer from "../Posts/MyPostsContainer";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {IProfileInfoType} from "../../types/types";

/*type IProfilePagePropsType = {
  // store: Store<CombinedState<IStateType>, Actions>;
  /!*profilePage: IProfilePageType;
    newPostText: string;
    dispatch: Dispatch<Actions>;*!/
};*/
type IProfilePropsType = {
    profile: IProfileInfoType | null
}


function Profile(props: IProfilePropsType) {
    return (
        <div className={scss.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
