import React from "react";
import scss from "./Users.module.scss";
import userPhoto from "../../assets/images/userPhoto.png";
import {IUserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import {followApi} from "../../api/api";

type IUsersPropsType = {
    items: Array<IUserType>
    pageSize: number
    totalCount: number
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    downloadUsersPage: (p: number) => void
    followingUsersInProcess: Array<number>
    toggleFollowingUser: (userId: number, isFollowing: boolean) =>void
}

const Users = (props: IUsersPropsType) => {
    console.log(props)
    //counting numbering of pages
    const pages = Math.ceil(props.totalCount / props.pageSize);
    let pagesCount: Array<number> = [];
    for (let i = 1; i <= pages; i++) {
        pagesCount.push(i);
    }
    console.log('UsersClass');
    return (
        <div>
            <div className={scss.pages}>
                {pagesCount.map(p => {
                    return <span key={p + Math.random()}
                                 className={props.currentPage === p ? scss.activePage : ""}
                                 onClick={() => props.downloadUsersPage(p)}
                    >{p}</span>
                })}
            </div>
            {
                props.items.map(u => {
                    return (
                        <div key={u.id} className={scss.user}>
                            <div>
                                <div className={scss.avatar}>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img
                                            src={u.photos.small != null ? u.photos.small : userPhoto}
                                            alt={u.id.toString()}/>
                                    </NavLink>
                                </div>
                                {u.followed ?
                                    <button disabled={props.followingUsersInProcess.some(id=>id===u.id)}
                                            onClick={() => {
                                                props.toggleFollowingUser(u.id, true);
                                        followApi.unfollow(u.id)
                                            .then(resultCode => {
                                                if (resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                                props.toggleFollowingUser(u.id, false);
                                            })
                                    }}>Unfollow</button>
                                    : <button disabled={props.followingUsersInProcess.some(id=>id===u.id)}
                                        onClick={() => {
                                            props.toggleFollowingUser(u.id, true);
                                        followApi.follow(u.id)
                                            .then(resultCode => {
                                                if (resultCode === 0) {
                                                    props.follow(u.id)
                                                }
                                                props.toggleFollowingUser(u.id, false);
                                            })
                                    }}>Follow</button>
                                }
                            </div>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                                <div>Minsk</div>
                                <div>Belarus</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;