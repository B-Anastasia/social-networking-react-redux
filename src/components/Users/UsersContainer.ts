import {connect} from "react-redux";
import Users from "./Users";
import {IStateType} from "../../redux/store";
import {followAC, IUsersACsType, IUserType, setUsersAC, unfollowAC} from "../../redux/users-reducer";
import {Dispatch} from "react";

const mapStateToProps=(state:IStateType)=>{
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps=(dispatch:Dispatch<IUsersACsType>)=>{
    return {
        followHandler: (userId: string) => (dispatch(followAC(userId))),
        unfollowHandler: (userId: string) => (dispatch(unfollowAC(userId))),
        setUsersHandler:(users:Array<IUserType>)=>(dispatch(setUsersAC(users)))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Users)