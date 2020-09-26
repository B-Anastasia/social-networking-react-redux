import React from "react";
import scss from "../others/Pages/Pages.module.scss";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {IProfileInfoType} from "../../types/types";
import Preloader from "../Preloader/Preloader";
import {IProfileInfoPageType} from "../../redux/profile-reducer";
import MyPosts from "../Posts";

type IProfilePropsType = {
    profile: IProfileInfoType | null,
    status: string,
    updateStatus: (status: string) => void
    profilePage: IProfileInfoPageType | null
}


function Profile({profile, profilePage, status, updateStatus}: IProfilePropsType) {
    if (!profile) {
        return <Preloader/>
    }
    // const postsList = profilePage && profilePage.posts !== null && profilePage.posts.map((p: IPostType) => (
    //     // <Post key={p.id} message={p.text} count={p.count} profile={props.profile}/>
    // <div className={styles.post}>
    //     <div className={styles.post__user}>
    //         {profilePage.profile!==null && <UserPost profile={profilePage.profile} />}
    //     </div>
    //     <div className={`${styles.post__content} block`}>{p.text}</div>
    //     <div className={styles.post__like}>
    //         <span>Like {p.count}</span>
    //     </div>
    // </div>
    // ));
    return (
        <div className={scss.profile}>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={updateStatus}/>
            <MyPosts profilePage={profilePage}/>
            {/*<MyPostsContainer/>*/}
        </div>
    );
}

export default Profile;
