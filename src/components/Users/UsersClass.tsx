import React from "react";
import {IUserType} from "../../redux/users-reducer";
import scss from './Users.module.scss';
import axios from 'axios'
import userPhoto from '../../assets/images/userPhoto.png'

type IUsersPropsType = {
    users: Array<IUserType>
    pageSize: number,
    totalCount: number,
    currentPage: number
    followHandler: (userId: string) => void,
    unfollowHandler: (userId: string) => void,
    setUsersHandler: (users: Array<IUserType>) => void
    changeCurrentPage:(currentPage:number)=>void
    setTotalCount:(totalCount:number)=>void
}

class UsersClass extends React.Component<IUsersPropsType> {

    componentDidMount(): void {
        console.log('componentDidMount')
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersHandler(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
        ;
    }

    downloadUsersPage=(currentPage:number)=>{
        this.props.changeCurrentPage(currentPage);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsersHandler(response.data.items))
        ;
    }



    render() {
    //counting numbering of pages
        const pages = Math.ceil(this.props.totalCount / this.props.pageSize);
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
                                     className={this.props.currentPage === p ? scss.activePage : ""}
                                     onClick={()=>this.downloadUsersPage(p)}
                        >{p}</span>
                    })}
                </div>
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
