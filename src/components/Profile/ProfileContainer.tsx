import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfile} from "../../redux/profile-reducer";
import {IProfileInfoType} from "../../types/types";
import {IRootStateType} from "../../redux/redux-store";

type IProfileContainerType = {
    profile: null | IProfileInfoType
    setProfile: (payload: IProfileInfoType) => void
}

class ProfileContainer extends React.Component<IProfileContainerType> {

    componentDidMount(): void {
        console.log('componentDidMount ProfileContainer')
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state: IRootStateType) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setProfile})(ProfileContainer);