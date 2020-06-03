import React from "react";
import scss from "./MessagesList.module.scss";

function MessagesList() {
  return (
    <div className={scss.messagesList}>
      <div className={scss.messagesList__item}>Hi</div>
      <div className={scss.messagesList__item}>How are you?</div>
      <div className={scss.messagesList__item}>I'm fine!</div>
      <div className={scss.messagesList__item}>What are doing?</div>
      <div className={scss.messagesList__item}>I'm learning React!</div>
    </div>
  );
}

export default MessagesList;
