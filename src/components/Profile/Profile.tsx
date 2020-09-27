import React from "react";
import scss from "../others/Pages/Pages.module.scss";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {IProfileInfoType} from "../../types/types";
import Preloader from "../Preloader/Preloader";
import {IProfileInfoPageType} from "../../redux/profile-reducer";
import MyPosts from "../Posts";
import {IFieldsPostType} from "../Posts/MyPosts";

type IProfilePropsType = {
    profile: IProfileInfoType | null,
    status: string,
    updateStatus: (status: string) => void
    profilePage: IProfileInfoPageType | null
    addNewPostAC: (dataForm: IFieldsPostType) => void
}


function Profile(props: IProfilePropsType) {
    const {profile, profilePage, status, updateStatus, addNewPostAC} = props

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={scss.profile}>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}/>
            <MyPosts profilePage={profilePage} addNewPostAC={addNewPostAC}/>
        </div>
    );
}

export default Profile;