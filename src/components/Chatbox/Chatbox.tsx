import React from "react";
import "./Chatbox.scss";
import { IStoreType } from "../../redux/store";
import Message from "./Message";
import NewMessage from "./NewMessage/NewMessage";

type ChatboxPropsType = {
  store: IStoreType;
  /*  messages: Array<IMessageType>;
  dispatch: (action: IActionType) => void;*/
};

const Chatbox: React.FC<ChatboxPropsType> = ({ store }) => {
  const messageList = store
    .getState()
    .dialogsPage.messages.map((m) => <Message key={m.id} message={m} />);

  return (
    <div className="chatbox">
      {messageList}
      <NewMessage store={store} />
    </div>
  );
};
export default Chatbox;
