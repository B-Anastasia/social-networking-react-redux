import {connect} from "react-redux";
import {
    changeCurrentPage,
    follow,
    IUserType,
    setTotalCount,
    setUsers, toggleFollowingUser,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {IRootStateType} from "../../redux/redux-store";
import {usersApi} from "../../api/api";

type IUsersContainerPropsType = {
    items: Array<IUserType>
    pageSize: number,
    totalCount: number,
    currentPage: number
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (users: Array<IUserType>) => void
    changeCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
    followingUsersInProcess: Array<number>
    toggleFollowingUser: (userId: number, isFollowing: boolean) =>void
}

class UsersContainer extends React.Component<IUsersContainerPropsType> {

    componentDidMount(): void {
        this.props.toggleIsFetching(true)
        console.log('componentDidMount UsersContainer')
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
            this.props.toggleIsFetching(false);
        })
    }

    downloadUsersPage = (currentPage: number) => {
        this.props.changeCurrentPage(currentPage);
        this.props.toggleIsFetching(true);
        usersApi.getUsers(currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.toggleIsFetching(false)
        })
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   items={this.props.items}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   downloadUsersPage={this.downloadUsersPage}
                   followingUsersInProcess={this.props.followingUsersInProcess}
                   toggleFollowingUser={this.props.toggleFollowingUser}/>
        </>
    }
}

const mapStateToProps = (state: IRootStateType) => {
    return {
        items: state.usersPage.items,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingUsersInProcess: state.usersPage.followingUsersInProcess
    }
}
/*const mapDispatchToProps = (dispatch: Dispatch<IUsersACsType>) => {
    return {
        follow: (userId: string) => (dispatch(followAC(userId))),
        unfollow: (userId: string) => (dispatch(unfollowAC(userId))),
        setUsers: (users: Array<IUserType>) => (dispatch(setUsersAC(users))),
        changeCurrentPage: (currentPage: number) => (dispatch(changeCurrentPageAC(currentPage))),
        setTotalCount: (totalCount: number) => dispatch(setTotalCountAC(totalCount)),
        toggleIsFetching: (isFetching:boolean)=>dispatch(toggleIsFetchingAC(isFetching))
    }
}*/

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    changeCurrentPage,
    setTotalCount,
    toggleIsFetching,
    toggleFollowingUser
})(UsersContainer);