import React from "react";
import "./Chatbox.scss";
import Message from "../../Message";
import NewMessageContainer from "../../NewMessage/NewMessageContainer";
import StoreContext from "../../../StoreContext";
import {IMessageType} from "../../../redux/store";

type ChatboxPropsType = {
    // store: Store<CombinedState<IStateType>, Actions>;
    /* store: IStoreType;
       dialogsPage: IDialogsPageType;
       dispatch: Dispatch<Actions>;
       messages: Array<IMessageType>;
       dispatch: (action: IActionType) => void;*/
};

const Chatbox: React.FC<ChatboxPropsType> = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const messageList = store.getState().dialogsPage.messages.map((m:IMessageType) => (
                    <Message key={m.id} message={m}/>
                ));

                return (
                    <div className="chatbox">
                        {messageList}
                        <NewMessageContainer/>
                        {/*<NewMessage dispatch={dispatch} dialogsPage={dialogsPage} />*/}
                    </div>
                );
            }}
        </StoreContext.Consumer>
    )
};
export default Chatbox;
