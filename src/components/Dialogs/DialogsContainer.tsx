import React from "react";
import {IRootStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {IDialogType, IMessageType} from "../../redux/store";
import {withAuth} from "../../hoc/withAuth";
import {compose} from "redux";
import {addNewMessageAC} from "../../redux/dialogs-reducer";

type IMapStateDialogsPropsType = {
    dialogs: Array<IDialogType>;
    messages: Array<IMessageType>;
}
type IMapDispatchDialogsPropsType = {
    addNewMessageAC: (newMessage: string) => void
}


export type IDialogsContainerType = IMapDispatchDialogsPropsType & IMapStateDialogsPropsType

// class DialogsContainer extends React.Component<IDialogsContainerType> {
//
//     render() {
//         debugger
//         return <Dialogs {...this.props}/>
//     }
// }

const mapStateToProps = (state: IRootStateType) => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
})

export default compose<React.ComponentType>(withAuth,
    connect<IMapStateDialogsPropsType, IMapDispatchDialogsPropsType, IDialogsContainerType, IRootStateType>(mapStateToProps, {addNewMessageAC}))(Dialogs)