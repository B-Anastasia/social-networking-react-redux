import React from "react";
import scss from './Dialogs.module.scss'
import {IDialogsContainerType} from "./DialogsContainer";
import {IDialogType, IMessageType} from "../../redux/store";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message";
import NewMessage from "./NewMessage";

function Dialogs({dialogs, messages, addNewMessageAC}: IDialogsContainerType) {

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
                <NewMessage onClickAddNewMessage={addNewMessageAC}/>
            </div>
        </div>
    );
}

export default Dialogs;