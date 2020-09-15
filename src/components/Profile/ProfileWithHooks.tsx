import React, {useEffect} from "react";
import scss from "../Pages/Pages.module.scss";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "../Posts/MyPostsContainer";
import {useDispatch, useSelector} from "react-redux";
import {IRootStateType} from "../../redux/redux-store";
import {IProfileInfoType} from "../../types/types";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {IPathParamsType} from "./ProfileContainer";

const ProfileWithHooks = (props: RouteComponentProps<IPathParamsType>) => {

    const profile = useSelector<IRootStateType, IProfileInfoType | null>((state: IRootStateType) => (state.profilePage.profile))
    const dispatch = useDispatch();

    useEffect(() => {
        let userId = props.match.params.userId;
        if(!userId){
            userId='2';
        }
        dispatch(setUserProfile(+userId))
    }, [dispatch, props.match.params.userId])

    return (
        <div className={scss.profile}>
            <ProfileInfo profile={profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default withRouter(ProfileWithHooks);