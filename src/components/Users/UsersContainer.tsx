import {connect} from "react-redux";
import {follow, getUsers, IUserType, toggleFollowingUser, toggleIsFetching, unfollow} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {IRootStateType} from "../../redux/redux-store";

type IUsersContainerPropsType = {
    items: Array<IUserType>
    pageSize: number,
    totalCount: number,
    currentPage: number
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    isFetching: boolean
    followingUsersInProcess: Array<number>
    toggleFollowingUser: (userId: number, isFollowing: boolean) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


class UsersContainer extends React.Component<IUsersContainerPropsType> {

    componentDidMount(): void {
        //used redux-thunk
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    downloadUsersPage = (currentPage: number) => {
        //used redux-thunk
        this.props.getUsers(currentPage, this.props.pageSize)
    }


    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null}
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
    toggleIsFetching,
    toggleFollowingUser,
    getUsers
})(UsersContainer);