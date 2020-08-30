import React, {useEffect} from "react";
import {IUserType} from "../../redux/users-reducer";
import scss from './Users.module.scss';
import axios from 'axios'
import userPhoto from '../../assets/images/userPhoto.png'
import {useSelector} from "react-redux";
import {IStateType} from "../../redux/store";
// import {v1} from "uuid";

type IUsersPropsType = {
    users: Array<IUserType>
    followHandler: (userId: string) => void,
    unfollowHandler: (userId: string) => void,
    setUsersHandler: (users: Array<IUserType>) => void
}

function Users(props: IUsersPropsType) {
    /*const setUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => props.setUsersHandler(response.data.items))
            ;
        }
    }*/
    useEffect(() => {
        console.log('useEffect')
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsersHandler(response.data.items))
        ;
    }, []);
    let users=useSelector<IStateType,Array<IUserType>>(state=>state.usersPage.users);

    /* if(props.users.length===0){
         props.setUsersHandler([
             {id:v1(),followed:true,fullName:'Dima',location:{city:'Minsk',country:'Belarus'},
                 photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR59Go4mH0kxlpZiHwCxeFKH1NAipRbHWOAQ&usqp=CAU',status:'I am good'},
             {id:v1(),followed:false,fullName:'Dima',location:{city:'Minsk',country:'Belarus'},
                 photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR59Go4mH0kxlpZiHwCxeFKH1NAipRbHWOAQ&usqp=CAU',status:'I am good'},
             {id:v1(),followed:true,fullName:'Dima',location:{city:'Minsk',country:'Belarus'},
                 photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR59Go4mH0kxlpZiHwCxeFKH1NAipRbHWOAQ&usqp=CAU',status:'I am good'},
         ])
     }*/

    return (
        <div>
            {/*<button onClick={setUsers}>Add users</button>*/}
            {
                users.map(u => {
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
