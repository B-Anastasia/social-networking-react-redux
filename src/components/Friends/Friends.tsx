import React from "react";
import scss from "./Friends.module.scss";
import {IFriendType} from "../../redux/store";
import UserPost from "../UserPost";
import {NavLink} from "react-router-dom";
import StoreContext from "../../StoreContext";
/*
type IFriendsPropsType = {
    // friends: Array<IFriendType>;
};*/

function Friends() {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const friendsList = store.getState().sidebar.friends.map((f: IFriendType) => {
                    return (
                        <NavLink key={f.id} to={`/friends/${f.id}`}>
                            <UserPost profile={f}/>
                        </NavLink>
                    );
                });

                return (
                    <div className={scss.friends}>
                        <div className={`${scss.friends__list} block`}>{friendsList}</div>
                    </div>
                );
            }}
        </StoreContext.Consumer>
    )
}

export default Friends;
