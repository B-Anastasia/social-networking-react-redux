import {connect} from "react-redux";
// import Users from "./Users";
import {IStateType} from "../../redux/store";
import {
    changeCurrentPageAC,
    followAC,
    IUsersACsType,
    IUserType, setTotalCountAC,
    setUsersAC,
    unfollowAC
} from "../../redux/users-reducer";
import {Dispatch} from "react";
import UsersClass from "./UsersClass";

const mapStateToProps=(state:IStateType)=>{
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage:state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize
    }
}
const mapDispatchToProps=(dispatch:Dispatch<IUsersACsType>)=>{
    return {
        followHandler: (userId: string) => (dispatch(followAC(userId))),
        unfollowHandler: (userId: string) => (dispatch(unfollowAC(userId))),
        setUsersHandler:(users:Array<IUserType>)=>(dispatch(setUsersAC(users))),
        changeCurrentPage:(currentPage:number)=>(dispatch(changeCurrentPageAC(currentPage))),
        setTotalCount:(totalCount:number)=>dispatch(setTotalCountAC(totalCount))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UsersClass)