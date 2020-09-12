import React from "react";
import {IUserType} from "../../redux/users-reducer";
import axios from 'axios'
import Users from "./Users";

type IUsersClassPropsType = {
    items: Array<IUserType>
    pageSize: number,
    totalCount: number,
    currentPage: number
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: Array<IUserType>) => void
    changeCurrentPage:(currentPage:number)=>void
    setTotalCount:(totalCount:number)=>void
}

class UsersClass extends React.Component<IUsersClassPropsType> {

    componentDidMount(): void {
        console.log('componentDidMount')
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            })
        ;
    }

    downloadUsersPage=(currentPage:number)=>{
        this.props.changeCurrentPage(currentPage);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
        ;
    }



    render() {
        return <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      items={this.props.items}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      downloadUsersPage={this.downloadUsersPage}
        />
    }
}

export default UsersClass;
