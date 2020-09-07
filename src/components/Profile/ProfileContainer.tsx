import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RouteComponentProps} from "react-router";
import {setProfile} from "../../redux/profile-reducer";
import {IProfileInfoType} from "../../types/types";
import {IRootStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";

/*type IProfileContainerType = {
    profile: null | IProfileInfoType
    setProfile: (payload: IProfileInfoType) => void
}*/

type IMapStatePropsType={
    profile: null | IProfileInfoType
}
type IMapDispatchPropsType={
    setProfile: (payload: IProfileInfoType) => void
}

//type for properties that we receive from withRouter
type IPathParamsType={
    userId:string
}

type ICommonPropsType= IMapStatePropsType & IMapDispatchPropsType;
type IPropsType=RouteComponentProps<IPathParamsType> & ICommonPropsType

class ProfileContainer extends React.Component<IPropsType> {

    componentDidMount(): void {
        console.dir(this.props)
        let userId = this.props.match.params.userId;
        if(!userId){
            userId='2';
        }
        console.log('componentDidMount ProfileContainer')
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                this.props.setProfile(response.data);
            })
        ;
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

export default connect<IMapStatePropsType, IMapDispatchPropsType,IPropsType,IRootStateType>(mapStateToProps, {setProfile})(ProfileContainerWithRouter);