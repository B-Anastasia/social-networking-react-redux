import React from "react";
import {
    Actions,
    INewMessageType, IStateType,
} from "../../../redux/store";
import {
    addNewMessage,
    updateInputNewMessage,
} from "../../../redux/dialogs-reducer";
import {CombinedState, Store} from "redux";
import NewMessage from "./NewMessage";

type PropsType = {
    store: Store<CombinedState<IStateType>, Actions>;
    /* dialogsPage: IDialogsPageType;
     dispatch: Dispatch<Actions>;*/
};

function NewMessageContainer({store}: PropsType) {

    let state = store.getState();

    const newMessageText = state.dialogsPage.newMessageText;

    const onClickAddNewMessage = (newMessage: INewMessageType) => {
        store.dispatch(addNewMessage(newMessage));
    };

    const onChangeInputValue = (newValue: string) => {
        store.dispatch(updateInputNewMessage(newValue));
    };

    return (
        <NewMessage newMessageText={newMessageText} onClickAddNewMessage={onClickAddNewMessage}
                    onChangeInputValue={onChangeInputValue}/>
    );
}

export default NewMessageContainer;
