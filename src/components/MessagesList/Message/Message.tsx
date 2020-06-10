import React from "react";
import scss from "./Message.module.scss";
import { IMessageType } from "../../../index";

function Message({ id, text }: IMessageType) {
  return (
    <div id={id} className={scss.message}>
      {text}
    </div>
  );
}

export default Message;
