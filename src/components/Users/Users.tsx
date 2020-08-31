import React from "react";
import scss from "./Users.module.scss";
import userPhoto from "../../assets/images/userPhoto.png";
import {IUserType} from "../../redux/users-reducer";

type IUsersPropsType = {
    users: Array<IUserType>
    pageSize: number
    totalCount: number
    currentPage: number
    followHandler: (userId: string) => void
    unfollowHandler: (userId: string) => void
    downloadUsersPage: (p:number)=>void
}

const Users = (props: IUsersPropsType) => {
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
                props.users.map(u => {
                    return (
                        <div key={u.id} className={scss.user}>
                            <div>
                                <div className={scss.avatar}><img
                                    src={u.photos.small != null ? u.photos.small : userPhoto}
                                    alt={u.id}/></div>
                                {u.followed ?
                                    <button onClick={() => props.unfollowHandler(u.id)}>Unfollow</button> :
                                    <button onClick={() => props.followHandler(u.id)}>Follow</button>}
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