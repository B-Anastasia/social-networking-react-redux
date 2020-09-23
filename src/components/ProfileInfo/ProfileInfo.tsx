import React from "react";
import scss from "./ProfileInfo.module.scss";
import CoverImage from "./CoverImage";
import User from "./User";
import {IProfileInfoType} from "../../types/types";

type IProfileInfoPropsType = {
    profile: IProfileInfoType,
    status:string,
    updateStatus:(status:string)=>void
}

function ProfileInfo(props: IProfileInfoPropsType) {

    return (
        <div className={`${scss.profileInfo} block`}>
            <CoverImage/>
            <div className={""}>
                <div className={"container"}>
                    <User profile={props.profile}
                          status={props.status}
                          updateStatus={props.updateStatus}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
