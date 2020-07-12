import React from "react";
import "./Chatbox.scss";
import {Actions, IStateType} from "../../redux/store";
import Message from "./Message";
import {CombinedState, Store} from "redux";
import NewMessageContainer from "./NewMessage/NewMessageContainer";

type ChatboxPropsType = {
    store: Store<CombinedState<IStateType>, Actions>;
    /* store: IStoreType;
       dialogsPage: IDialogsPageType;
       dispatch: Dispatch<Actions>;
       messages: Array<IMessageType>;
       dispatch: (action: IActionType) => void;*/
};

const Chatbox: React.FC<ChatboxPropsType> = ({store}) => {
    const messageList = store.getState().dialogsPage.messages.map((m) => (
        <Message key={m.id} message={m}/>
    ));

    return (
        <div className="chatbox">
            {messageList}
            <NewMessageContainer store={store}/>
            {/*<NewMessage dispatch={dispatch} dialogsPage={dialogsPage} />*/}
        </div>
    );
};
export default Chatbox;
