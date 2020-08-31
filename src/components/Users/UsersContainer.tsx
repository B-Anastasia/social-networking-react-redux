import {connect} from "react-redux";
import {IStateType} from "../../redux/store";
import {
    changeCurrentPageAC,
    followAC,
    IUsersACsType,
    IUserType, setTotalCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC
} from "../../redux/users-reducer";
import React, {Dispatch} from "react";
import axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

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
    isFetching:boolean
    toggleIsFetching: (isFetching:boolean)=>void
}

class UsersContainer extends React.Component<IUsersContainerPropsType> {

    componentDidMount(): void {
        this.props.toggleIsFetching(true)
        console.log('componentDidMount')
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersHandler(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.toggleIsFetching(true);
            })
        ;
    }

    downloadUsersPage = (currentPage: number) => {
        this.props.changeCurrentPage(currentPage);
        this.props.toggleIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersHandler(response.data.items);
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
                   followHandler={this.props.followHandler}
                   unfollowHandler={this.props.unfollowHandler}
                   downloadUsersPage={this.downloadUsersPage}/>
            </>
    }
}

const mapStateToProps = (state: IStateType) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching:state.usersPage.isFetching
    }
}
const mapDispatchToProps = (dispatch: Dispatch<IUsersACsType>) => {
    return {
        followHandler: (userId: string) => (dispatch(followAC(userId))),
        unfollowHandler: (userId: string) => (dispatch(unfollowAC(userId))),
        setUsersHandler: (users: Array<IUserType>) => (dispatch(setUsersAC(users))),
        changeCurrentPage: (currentPage: number) => (dispatch(changeCurrentPageAC(currentPage))),
        setTotalCount: (totalCount: number) => dispatch(setTotalCountAC(totalCount)),
        toggleIsFetching: (isFetching:boolean)=>dispatch(toggleIsFetchingAC(isFetching))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);