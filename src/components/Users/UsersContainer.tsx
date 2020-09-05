import {connect} from "react-redux";
import {
    changeCurrentPage,
    follow,
    IUserType,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {IRootStateType} from "../../redux/redux-store";

type IUsersContainerPropsType = {
    users: Array<IUserType>
    pageSize: number,
    totalCount: number,
    currentPage: number
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (users: Array<IUserType>) => void
    changeCurrentPage: (currentPage: number) => void
    setTotalCount: (totalCount: number) => void
    isFetching:boolean
    toggleIsFetching: (isFetching:boolean)=>void
}

class UsersContainer extends React.Component<IUsersContainerPropsType> {

    componentDidMount(): void {
        this.props.toggleIsFetching(true)
        console.log('componentDidMount UsersContainer')
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.toggleIsFetching(false);
            })
        ;
    }

    downloadUsersPage = (currentPage: number) => {
        this.props.changeCurrentPage(currentPage);
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.toggleIsFetching(false)
            })
        ;
    }


    render() {
        return<>
            {this.props.isFetching? <Preloader/>:null}
            <Users totalCount={this.props.totalCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   downloadUsersPage={this.downloadUsersPage}/>
            </>
    }
}

const mapStateToProps = (state: IRootStateType) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching:state.usersPage.isFetching
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

export default connect(mapStateToProps, {follow,unfollow,setUsers,changeCurrentPage,setTotalCount,toggleIsFetching })(UsersContainer);