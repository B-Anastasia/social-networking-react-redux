import React from "react";
import CoverImage from "../CoverImage";
import User from "../User";

function Profile() {
  return (
    <div className={"block"}>
      <CoverImage />
      <div className={"container"}>
        <User />
      </div>
    </div>
  );
}
export default Profile;
