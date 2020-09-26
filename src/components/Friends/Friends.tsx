import React from "react";
import scss from "./Friends.module.scss";
import {IFriendType} from "../../redux/store";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {IRootStateType} from "../../redux/redux-store";
import UserPost from "../UserPost";

function Friends() {
    const friends=useSelector<IRootStateType,Array<IFriendType>>(state => state.sidebar.friends)

    const friendsList = friends.map((f) => {
        return (
            <NavLink key={f.id.toString()} to={`/friends/${f.id}`}>
               <UserPost profile={f}/>
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
