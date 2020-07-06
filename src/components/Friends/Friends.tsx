import React from "react";
import scss from "./Friends.module.scss";
import { IFriendType } from "../../redux/store";
import UserPost from "../UserPost";
import { NavLink } from "react-router-dom";

type IFriendsPropsType = {
  friends: Array<IFriendType>;
};

function Friends({ friends }: IFriendsPropsType) {
  const friendsList = friends.map((f) => {
    return (
      <NavLink key={f.id} to={`/friends/${f.id}`}>
        <UserPost profile={f} />
      </NavLink>
    );
  });

  return (
    <div className={scss.friends}>
      <div className={`${scss.friends__list} block`}>{friendsList}</div>
    </div>
  );
}

export default Friends;
