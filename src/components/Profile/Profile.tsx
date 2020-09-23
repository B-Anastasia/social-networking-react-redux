import React from "react";
import scss from "../others/Pages/Pages.module.scss";
import MyPostsContainer from "../Posts/MyPostsContainer";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {IProfileInfoType} from "../../types/types";
import Preloader from "../Preloader/Preloader";

/*type IProfilePagePropsType = {
  // store: Store<CombinedState<IStateType>, Actions>;
  /!*profilePage: IProfilePageType;
    newPostText: string;
    dispatch: Dispatch<Actions>;*!/
};*/
type IProfilePropsType = {
    profile: IProfileInfoType | null,
    status:string,
    updateStatus:(status:string)=>void
}


function Profile(props: IProfilePropsType) {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={scss.profile}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;
