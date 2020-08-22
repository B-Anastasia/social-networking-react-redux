import React from "react";
import {IUserType} from "../../redux/users-reducer";
import scss from './Users.module.scss';
import axios from 'axios'
import userPhoto from '../../assets/images/userPhoto.png'

type IUsersPropsType = {
    users: Array<IUserType>
    followHandler: (userId: string) => void,
    unfollowHandler: (userId: string) => void,
    setUsersHandler: (users: Array<IUserType>) => void
}

class UsersClass extends React.Component<IUsersPropsType> {

    componentDidMount(): void {
        console.log('componentDidMount')
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsersHandler(response.data.items))
        ;
    }

    render() {
        console.log('UsersClass');
        return (
            <div>
                {
                    this.props.users.map(u => {
                        return (
                            <div key={u.id} className={scss.user}>
                                <div>
                                    <div className={scss.avatar}><img
                                        src={u.photos.small != null ? u.photos.small : userPhoto}
                                        alt={u.id}/></div>
                                    {u.followed ?
                                        <button onClick={() => this.props.unfollowHandler(u.id)}>Unfollow</button> :
                                        <button onClick={() => this.props.followHandler(u.id)}>Follow</button>}
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
}

export default UsersClass;
