import React from "react";
import scss from "./ProfileInfo.module.scss";
import CoverImage from "./CoverImage";
import User from "./User";
import {IProfileInfoType} from "../../types/types";
import Preloader from "../Preloader/Preloader";

type IProfileInfoPropsType = {
    profile: IProfileInfoType | null
}

function ProfileInfo(props: IProfileInfoPropsType) {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={`${scss.profileInfo} block`}>
            <CoverImage/>
            <div className={""}>
                <div className={"container"}>
                    <User profile={props.profile}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
