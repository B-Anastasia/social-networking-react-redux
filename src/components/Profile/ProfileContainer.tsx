import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {IProfileInfoType} from "../../types/types";
import {IRootStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
import {withAuth} from "../../hoc/withAuth";
import {compose} from "redux";

type IMapStatePropsType = {
    profile: null | IProfileInfoType
    status:string
}
type IMapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    updateStatus:(status:string)=>void
    getStatus:(status:number)=>void
}

//type for properties that we receive from withRouter
export type IPathParamsType = {
    userId: string
}

type ICommonPropsType = IMapStatePropsType & IMapDispatchPropsType;
type IPropsType = RouteComponentProps<IPathParamsType> & ICommonPropsType

class ProfileContainer extends React.Component<IPropsType> {

    componentDidMount(): void {
        console.log('Component mounted' +this.props.status)
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '10913';
        }
        //thunk
        this.props.getUserProfile(+userId)
        this.props.getStatus(+userId)
    }

    render(): React.ReactNode {
        return <Profile profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
        />;
    }
}

let mapStateToProps = (state: IRootStateType) => ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
})

export default compose<React.ComponentType>(
    withRouter,
    connect<IMapStatePropsType, IMapDispatchPropsType, IPropsType, IRootStateType>(mapStateToProps, {getUserProfile,updateStatus,getStatus}),
    withAuth)(ProfileContainer)