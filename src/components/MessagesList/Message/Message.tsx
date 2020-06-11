import React from "react";
import scss from "./Message.module.scss";
import { IMessageType } from "../../../redux/state";

type IMessagePropsType = {
  message: IMessageType;
};

const Message: React.FC<IMessagePropsType> = (props) => {
  const { id, text, img, img_name, name, time } = props.message;
  return (
    <div id={id} className={scss.message}>
      {text}
    </div>
  );
};

export default Message;
