import React from "react";
import {
    INewMessageType,
} from "../../../redux/store";
import {
    addNewMessage,
    updateInputNewMessage,
} from "../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";
import StoreContext from "../../../StoreContext";

/*type PropsType = {
    // store: Store<CombinedState<IStateType>, Actions>;
    /!* dialogsPage: IDialogsPageType;
     dispatch: Dispatch<Actions>;*!/
};*/

function NewMessageContainer() {
    return (
        <StoreContext.Consumer>
            {(store) => {
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
            }}
        </StoreContext.Consumer>
    )

}

export default NewMessageContainer;
