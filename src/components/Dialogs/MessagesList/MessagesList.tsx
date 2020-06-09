import React from "react";
import scss from "./MessagesList.module.scss";
import { v1 } from "uuid";

type IMessageType = {
  id: string;
  text: string;
};

function MessagesList() {
  let messages: IMessageType[] = [
    { id: v1(), text: "Hi" },
    { id: v1(), text: "How are you?" },
    { id: v1(), text: "I'm fine!" },
    { id: v1(), text: "What are doing?" },
    { id: v1(), text: "I'm learning React!" },
  ];

  const messagesList = messages.map((m: IMessageType) => (
    <div key={m.id} className={scss.messagesList__item}>
      {m.text}
    </div>
  ));
  return <div className={scss.messagesList}>{messagesList}</div>;
}

export default MessagesList;
