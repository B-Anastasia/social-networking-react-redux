import React, { Dispatch } from "react";
import "./Chatbox.scss";
import { Actions, IDialogsPageType } from "../../redux/store";
import Message from "./Message";
import NewMessage from "./NewMessage/NewMessage";

type ChatboxPropsType = {
  // store: IStoreType;
  dialogsPage: IDialogsPageType;
  dispatch: Dispatch<Actions>;
  /*  messages: Array<IMessageType>;
  dispatch: (action: IActionType) => void;*/
};

const Chatbox: React.FC<ChatboxPropsType> = ({ dispatch, dialogsPage }) => {
  const messageList = dialogsPage.messages.map((m) => (
    <Message key={m.id} message={m} />
  ));

  return (
    <div className="chatbox">
      {messageList}
      <NewMessage dispatch={dispatch} dialogsPage={dialogsPage} />
    </div>
  );
};
export default Chatbox;
