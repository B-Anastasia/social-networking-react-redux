import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router";
import {getStatus, getUserProfile, IProfileInfoPageType, updateStatus} from "../../redux/profile-reducer";
import {IProfileInfoType} from "../../types/types";
import {IRootStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";
// import {withAuth} from "../../hoc/withAuth";
import {compose} from "redux";

type IMapStatePropsType = {
    profile: null | IProfileInfoType
    status: string
    profilePage: IProfileInfoPageType|null
}
type IMapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    updateStatus: (status: string) => void
    getStatus: (status: number) => void
}

//type for properties that we receive from withRouter
export type IPathParamsType = {
    userId: string
}

type ICommonPropsType = IMapStatePropsType & IMapDispatchPropsType;
type IPropsType = RouteComponentProps<IPathParamsType> & ICommonPropsType

class ProfileContainer extends React.Component<IPropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '10913';
        }
        //thunk
        this.props.getUserProfile(+userId)
        this.props.getStatus(+userId)
    }

    render(): React.ReactNode {
        return <Profile profilePage={this.props.profilePage}
            profile={this.props.profile}
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}
        />;
    }
}

let mapStateToProps = (state: IRootStateType) => ({
    profile: state.profilePage.profile,
    profilePage: state.profilePage,
    status: state.profilePage.status,
})

export default compose<React.ComponentType>(connect<IMapStatePropsType, IMapDispatchPropsType, IPropsType, IRootStateType>(mapStateToProps, {
        getUserProfile,
        updateStatus,
        getStatus
    }),
    withRouter,
    )(ProfileContainer)