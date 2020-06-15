import React from "react";
import "./Chatbox.scss";
import { IMessageType } from "../../redux/state";
import Message from "./Message";
import NewText from "../Posts/NewPost";

type ChatboxPropsType = {
  messages: Array<IMessageType>;
};

const Chatbox: React.FC<ChatboxPropsType> = (props) => {
  const messageList = props.messages.map((m) => (
    <Message key={m.id} message={m} />
  ));

  return (
    <div className="chatbox">
      {messageList}
      <NewText />
    </div>
  );
};
export default Chatbox;
