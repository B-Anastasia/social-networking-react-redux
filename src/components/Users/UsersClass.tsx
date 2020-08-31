import React from "react";
import {IUserType} from "../../redux/users-reducer";
import axios from 'axios'
import Users from "./Users";

type IUsersClassPropsType = {
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

class UsersClass extends React.Component<IUsersClassPropsType> {

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
        return <Users totalCount={this.props.totalCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      followHandler={this.props.followHandler}
                      unfollowHandler={this.props.unfollowHandler}
                      downloadUsersPage={this.downloadUsersPage}
        />
    }
}

export default UsersClass;
