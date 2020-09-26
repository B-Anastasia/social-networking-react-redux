import {Dispatch} from "react";
import {addNewMessageAC, IDialogsActions,} from "../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";

let mapDispatchToProps = (dispatch: Dispatch<IDialogsActions>) => ({
    onClickAddNewMessage: (newMessage: string) => {
        dispatch(addNewMessageAC(newMessage))
    }
})

const NewMessageContainer = connect(null, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;

/*type PropsType = {
    // store: Store<CombinedState<IStateType>, Actions>;
    /!* dialogsPage: IDialogsPageType;
     dispatch: Dispatch<Actions>;*!/
};*/

/*function OLDNewMessageContainer() {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                const newMessageText = state.dialogsPage.newMessageText;

                const onClickAddNewMessage = (newMessage: INewMessageType) => {
                    store.dispatch(addNewMessageAC(newMessage));
                };

                const onChangeInputValue = (newValue: string) => {
                    store.dispatch(updateInputNewMessageAC(newValue));
                };

                return (
                    <NewMessage newMessageText={newMessageText} onClickAddNewMessage={onClickAddNewMessage}
                                onChangeInputValue={onChangeInputValue}/>
                );
            }}
        </StoreContext.Consumer>
    )

}*/
