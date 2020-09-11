import React from "react";
import scss from "./Users.module.scss";
import userPhoto from "../../assets/images/userPhoto.png";
import {IUserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type IUsersPropsType = {
    users: Array<IUserType>
    pageSize: number
    totalCount: number
    currentPage: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    downloadUsersPage: (p: number) => void
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
                props.users.map(u => {
                    return (
                        <div key={u.id} className={scss.user}>
                            <div>
                                <div className={scss.avatar}>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img
                                            src={u.photos.small != null ? u.photos.small : userPhoto}
                                            alt={u.id}/>
                                    </NavLink>
                                </div>
                                {u.followed ?
                                    <button onClick={() => {
                                        axios
                                            .delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '1f62f832-199c-4198-bcf8-fa36b24e67ca'
                                                    }
                                                })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    console.log('follow')
                                                    props.unfollow(u.id)
                                                }
                                            })
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        axios
                                            .post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                {},
                                                {
                                                    withCredentials: true,
                                                    headers: {
                                                        'API-KEY': '1f62f832-199c-4198-bcf8-fa36b24e67ca'
                                                    }
                                                })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    console.log('follow')
                                                    props.follow(u.id)
                                                }
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