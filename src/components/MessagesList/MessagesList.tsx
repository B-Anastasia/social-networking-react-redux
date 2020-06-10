import React from "react";
import scss from "./MessagesList.module.scss";
import Message from "./Message/Message";
import { IMessageType } from "../../index";

type IMessagePropsType = {
  messages: Array<IMessageType>;
};

function MessagesList({ messages }: IMessagePropsType) {
  const messagesList = messages.map((m: IMessageType) => (
    <Message key={m.id} text={m.text} id={m.id} />
  ));
  return <div className={scss.messagesList}>{messagesList}</div>;
}

export default MessagesList;
