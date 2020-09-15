import React, {useEffect} from "react";
import {follow, getUsers, IUserType, unfollow} from "../../redux/users-reducer";
import userPhoto from '../../assets/images/userPhoto.png'
import {useDispatch, useSelector} from "react-redux";
import {IStateType} from "../../redux/store";
import Preloader from "../Preloader/Preloader";
import scss from './Users.module.scss';
import {NavLink} from "react-router-dom";

export default function UsersHooks() {

    let users = useSelector<IStateType, Array<IUserType>>(state => state.usersPage.items);
    let currentPage = useSelector<IStateType, number>(state => state.usersPage.currentPage)
    let pageSize = useSelector<IStateType, number>(state => state.usersPage.pageSize);
    let totalCount = useSelector<IStateType, number>(state => state.usersPage.totalCount);
    let isFetching = useSelector<IStateType, boolean>(state => state.usersPage.isFetching);
    let followingUsersInProcess = useSelector<IStateType, number[]>(state => state.usersPage.followingUsersInProcess);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect is sideEffect')
        //used thunk
        dispatch(getUsers(currentPage, pageSize))
    }, [currentPage, dispatch, pageSize]);

    const pages = Math.ceil(totalCount / pageSize);
    let pagesCount: Array<number> = [];
    for (let i = 1; i <= pages; i++) {
        pagesCount.push(i);
    }

    const downloadUsersPage = (currentPage: number) => {
        //used thunk
        dispatch(getUsers(currentPage, pageSize))
    }

    return (
        <div>
            {/*<button onClick={setUsers}>Add users</button>*/}
            <div className={scss.pages}>
                {pagesCount.map(p => {
                    return <span key={p + Math.random()}
                                 className={currentPage === p ? scss.activePage : ""}
                                 onClick={() => downloadUsersPage(p)}
                    >{p}</span>
                })}
            </div>
            {isFetching ? <Preloader/> : users.map(u => {
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
                                <button disabled={followingUsersInProcess.some(id => id === u.id)}
                                        onClick={() => dispatch(unfollow(u.id))
                                        }>Unfollow</button> :
                                <button disabled={followingUsersInProcess.some(id => id === u.id)}
                                        onClick={() => dispatch(follow(u.id))
                                        }>Follow</button>}
                        </div>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                            <div>Minsk</div>
                            <div>Belarus</div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}