import React, {useEffect} from "react";
import {
    changeCurrentPage, follow,
    IUserType,
    setTotalCount,
    setUsers,
    toggleIsFetching, unfollow
} from "../../redux/users-reducer";
import scss from './Users.module.scss';
import axios from 'axios'
import userPhoto from '../../assets/images/userPhoto.png'
import {useDispatch, useSelector} from "react-redux";
import {IStateType} from "../../redux/store";
import Preloader from "../Preloader/Preloader";
// import {v1} from "uuid";

/*type IUsersPropsType = {
    users: Array<IUserType>
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: Array<IUserType>) => void
}*/

function UsersHooks() {
    /*const setUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => props.setUsers(response.data.items))
            ;
        }
    }*/
    let users = useSelector<IStateType, Array<IUserType>>(state => state.usersPage.users);
    let currentPage = useSelector<IStateType, number>(state => state.usersPage.currentPage)
    let pageSize = useSelector<IStateType, number>(state => state.usersPage.pageSize);
    let totalCount = useSelector<IStateType, number>(state => state.usersPage.totalCount);
    let isFetching=useSelector<IStateType,boolean>(state => state.usersPage.isFetching);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('useEffect ith sideEffect')
        dispatch(toggleIsFetching(true));
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                dispatch(setUsers(response.data.items));
                dispatch(setTotalCount(response.data.totalCount))
                dispatch(toggleIsFetching(false));
            });
    }, [currentPage,dispatch,pageSize]);

    const pages = Math.ceil(totalCount / pageSize);
    let pagesCount: Array<number> = [];
    for (let i = 1; i <= pages; i++) {
        pagesCount.push(i);
    }

    /* if(props.users.length===0){
         props.setUsers([
             {id:v1(),followed:true,fullName:'Dima',location:{city:'Minsk',country:'Belarus'},
                 photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR59Go4mH0kxlpZiHwCxeFKH1NAipRbHWOAQ&usqp=CAU',status:'I am good'},
             {id:v1(),followed:false,fullName:'Dima',location:{city:'Minsk',country:'Belarus'},
                 photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR59Go4mH0kxlpZiHwCxeFKH1NAipRbHWOAQ&usqp=CAU',status:'I am good'},
             {id:v1(),followed:true,fullName:'Dima',location:{city:'Minsk',country:'Belarus'},
                 photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR59Go4mH0kxlpZiHwCxeFKH1NAipRbHWOAQ&usqp=CAU',status:'I am good'},
         ])
     }*/
    const downloadUsersPage=(currentPage:number)=>{
        dispatch(changeCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                dispatch(setUsers(response.data.items));
                dispatch(toggleIsFetching(false));
            })
        ;
    }

    return (
        <div>
            {/*<button onClick={setUsers}>Add users</button>*/}
            <div className={scss.pages}>
                {pagesCount.map(p => {
                    return <span key={p + Math.random()}
                                 className={currentPage === p ? scss.activePage : ""}
                                 onClick={()=>downloadUsersPage(p)}
                    >{p}</span>
                })}
            </div>
            {isFetching?<Preloader/> : users.map(u => {
                return (
                    <div key={u.id} className={scss.user}>
                        <div>
                            <div className={scss.avatar}><img
                                src={u.photos.small != null ? u.photos.small : userPhoto}
                                alt={u.id}/></div>
                            {u.followed ?
                                <button onClick={() => dispatch(unfollow(u.id))}>Unfollow</button> :
                                <button onClick={() => dispatch(follow(u.id))}>Follow</button>}
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

export default UsersHooks;
