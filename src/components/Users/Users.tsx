import React from "react";
import {IUserType} from "../../redux/users-reducer";
import {v1} from "uuid";
import scss from './Users.module.scss'

type IUsersPropsType={
    users:Array<IUserType>
    followHandler: (userId: string) => void,
    unfollowHandler: (userId: string) => void,
    setUsersHandler:(users:Array<IUserType>)=>void
}

function Users(props:IUsersPropsType) {
    if(props.users.length===0){
        props.setUsersHandler([
            {id:v1(),followed:true,fullName:'Dima',location:{city:'Minsk',country:'Belarus'},
                photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR59Go4mH0kxlpZiHwCxeFKH1NAipRbHWOAQ&usqp=CAU',status:'I am good'},
            {id:v1(),followed:false,fullName:'Dima',location:{city:'Minsk',country:'Belarus'},
                photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR59Go4mH0kxlpZiHwCxeFKH1NAipRbHWOAQ&usqp=CAU',status:'I am good'},
            {id:v1(),followed:true,fullName:'Dima',location:{city:'Minsk',country:'Belarus'},
                photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTR59Go4mH0kxlpZiHwCxeFKH1NAipRbHWOAQ&usqp=CAU',status:'I am good'},
        ])
    }
return (
    <div >{
        props.users.map(u=>{
            return (
                <div  key={u.id} className={scss.user}>
                    <div>
                        <div><img src={u.photoUrl} alt={u.id}/></div>
                        {u.followed?
                            <button onClick={()=>props.unfollowHandler(u.id)}>Unfollow</button>:
                            <button onClick={()=>props.followHandler(u.id)}>Follow</button>}
                    </div>
                    <div>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </div>
                </div>
            )
        })
    }
    </div>
)
}
export default Users;
