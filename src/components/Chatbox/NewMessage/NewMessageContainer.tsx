import {Dispatch} from "react";
import {
    INewMessageType, IStateType,
} from "../../../redux/store";
import {
    addNewMessageAC, IDialogsActions,
     updateInputNewMessageAC,
} from "../../../redux/dialogs-reducer";
import NewMessage from "./NewMessage";
import {connect} from "react-redux";

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

let mapStateToProps=(state:IStateType)=>{
    return{
    newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps=(dispatch:Dispatch<IDialogsActions>)=>{
    debugger
    return{
        onClickAddNewMessage: (newMessage: INewMessageType)=> {dispatch(addNewMessageAC(newMessage))},
        onChangeInputValue:(newValue: string) => {
            dispatch(updateInputNewMessageAC(newValue));
        }
    }
}

const NewMessageContainer=connect(mapStateToProps,mapDispatchToProps)(NewMessage);

export default NewMessageContainer;
