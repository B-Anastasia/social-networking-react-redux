import React from "react";
import scss from "./ProfileInfo.module.scss";
import CoverImage from "./CoverImage";
import User from "./User";

function ProfileInfo() {
  return (
    <div className={`${scss.profileInfo} block`}>
      <CoverImage />
      <div className={""}>
        <div className={"container"}>
          <User />
        </div>
      </div>
    </div>
  );
}
export default ProfileInfo;
