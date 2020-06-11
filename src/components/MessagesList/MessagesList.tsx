import React from "react";
import scss from "./MessagesList.module.scss";
import Message from "./Message/Message";
import { IMessageType } from "../../redux/state";

type IMessagePropsType = {
  messages: Array<IMessageType>;
};

function MessagesList({ messages }: IMessagePropsType) {
  const messagesList = messages.map((m: IMessageType) => (
    <Message key={m.id} message={m} />
  ));
  return <div className={scss.messagesList}>{messagesList}</div>;
}

export default MessagesList;
