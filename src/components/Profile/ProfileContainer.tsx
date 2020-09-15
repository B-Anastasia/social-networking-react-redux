import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router";
import {setUserProfile} from "../../redux/profile-reducer";
import {IProfileInfoType} from "../../types/types";
import {IRootStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";

type IMapStatePropsType={
    profile: null | IProfileInfoType
}
type IMapDispatchPropsType={
    setUserProfile: (userId:number) => void
}

//type for properties that we receive from withRouter
export type IPathParamsType={
    userId:string
}

type ICommonPropsType= IMapStatePropsType & IMapDispatchPropsType;
type IPropsType=RouteComponentProps<IPathParamsType> & ICommonPropsType

class ProfileContainer extends React.Component<IPropsType> {

    componentDidMount(): void {
        console.log('componentDidMount ProfileContainer')
        console.dir(this.props)
        let userId = this.props.match.params.userId;
        if(!userId){
            userId='2';
        }
        //thunk
       this.props.setUserProfile(+userId)
    }

    render(): React.ReactNode {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps= (state: IRootStateType) => ({
    profile: state.profilePage.profile
})

const ProfileContainerWithRouter = withRouter(ProfileContainer);

export default connect<IMapStatePropsType, IMapDispatchPropsType,IPropsType,IRootStateType>(mapStateToProps, {setUserProfile})(ProfileContainerWithRouter);