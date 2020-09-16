import React from "react";
import scss from './Dialogs.module.scss'
import NewMessageContainer from "../NewMessage/NewMessageContainer";
import {IDialogsContainerType} from "./DialogsContainer";
import {IDialogType, IMessageType} from "../../redux/store";
import DialogItem from "../DialogItem/DialogItem";
import Message from "../Message";

function Dialogs({dialogs, messages}: IDialogsContainerType) {

    const dialogsList = dialogs.map((d: IDialogType) => (
        <DialogItem key={d.id} id={d.id} profile={d}/>
    ));
    const messageList = messages.map((m: IMessageType) => (
        <Message key={m.id} message={m}/>
    ));

    return (
        <div className={`block ${scss.dialogs}`}>
            <div className={scss.dialogs__list}>
                <div className={scss.dialogsList}>{dialogsList}</div>
            </div>
            <div className={scss.chatbox}>
                {messageList}
                <NewMessageContainer/>
            </div>
        </div>
    );
}

export default Dialogs;