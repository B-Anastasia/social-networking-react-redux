import React, {useCallback, useEffect} from "react";
import scss from "../others/Pages/Pages.module.scss";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {IRootStateType} from "../../redux/redux-store";
import {IProfileInfoType} from "../../types/types";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";
import {IPathParamsType} from "./ProfileContainer";
import {withAuth} from "../../hoc/withAuth";
import {compose} from "redux";
import Preloader from "../Preloader/Preloader";

const ProfileWithHooks = (props: RouteComponentProps<IPathParamsType>) => {

    const profile = useSelector<IRootStateType, IProfileInfoType | null>((state: IRootStateType) => (state.profilePage.profile))
    const status = useSelector<IRootStateType, string>(state => state.profilePage.status)
    const dispatch = useDispatch();

    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = '10913';
        }
        dispatch(getUserProfile(+userId));
        dispatch(getStatus(+userId));
    }, [dispatch, props.match.params.userId]);

    const update=useCallback((status:string)=>dispatch(updateStatus(status)),[dispatch])
    if(!profile){
        return <Preloader/>
    }
    return (

        <div className={scss.profile}>
            <ProfileInfo profile={profile}
                         status={status}
                         updateStatus={update}
            />
            {/*<MyPostsContainer/>*/}
        </div>
    )
}


export default compose<React.ComponentType>(withRouter, withAuth)(ProfileWithHooks);