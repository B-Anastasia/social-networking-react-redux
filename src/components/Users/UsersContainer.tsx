import {connect} from "react-redux";
import {IStateType} from "../../redux/store";
import {
    changeCurrentPageAC,
    followAC,
    IUsersACsType,
    IUserType, setTotalCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/users-reducer";
import React, {Dispatch} from "react";
import axios from "axios";
import Users from "./Users";

type IUsersContainerPropsType = {
    users: Array<IUserType>
    pageSize: number,
    totalCount: number,
    currentPage: number
    followHandler: (userId: string) => void,
    unfollowHandler: (userId: string) => void,
    setUsersHandler: (users: Array<IUserType>) => void
    changeCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
}

class UsersContainer extends React.Component<IUsersContainerPropsType> {

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

    downloadUsersPage = (currentPage: number) => {
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
                      downloadUsersPage={this.downloadUsersPage}/>
    }
}

const mapStateToProps = (state: IStateType) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize
    }
}
const mapDispatchToProps = (dispatch: Dispatch<IUsersACsType>) => {
    return {
        followHandler: (userId: string) => (dispatch(followAC(userId))),
        unfollowHandler: (userId: string) => (dispatch(unfollowAC(userId))),
        setUsersHandler: (users: Array<IUserType>) => (dispatch(setUsersAC(users))),
        changeCurrentPage: (currentPage: number) => (dispatch(changeCurrentPageAC(currentPage))),
        setTotalCount: (totalCount: number) => dispatch(setTotalCountAC(totalCount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);