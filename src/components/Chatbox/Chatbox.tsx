import React from "react";
import "./Chatbox.scss";
import { IMessageType } from "../../redux/state";
import Message from "./Message";
import NewMessage from "./NewMessage/NewMessage";

type ChatboxPropsType = {
  messages: Array<IMessageType>;
  addNewMessage: (
    text: string,
    name: string,
    imgUrl?: string,
    img_name?: string
  ) => void;
};

const Chatbox: React.FC<ChatboxPropsType> = (props) => {
  const messageList = props.messages.map((m) => (
    <Message key={m.id} message={m} />
  ));

  return (
    <div className="chatbox">
      {messageList}
      <NewMessage addNewMessage={props.addNewMessage} />
    </div>
  );
};
export default Chatbox;
