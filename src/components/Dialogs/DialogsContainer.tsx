import React from "react";
import {IRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {IDialogType, IMessageType} from "../../redux/store";
import {Redirect} from "react-router-dom";

type IMapStateDialogsPropsType = {
    dialogs: Array<IDialogType>;
    messages: Array<IMessageType>;
    isAuth: boolean
}
type IMapDispatchDialogsPropsType = {}

export type IDialogsContainerType = IMapDispatchDialogsPropsType & IMapStateDialogsPropsType

class DialogsContainer extends React.Component<IDialogsContainerType> {

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return <Dialogs {...this.props}/>
    }
}

const mapStateToProps = (state: IRootStateType) => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
    isAuth: state.auth.isAuth
})

export default connect<IMapStateDialogsPropsType, IMapDispatchDialogsPropsType, IDialogsContainerType, IRootStateType>(mapStateToProps, {})(DialogsContainer)