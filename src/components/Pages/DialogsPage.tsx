import React from "react";
import scss from "./Pages.module.scss";
import DialogsList from "../DialogsList";
// import MessagesList from "../MessagesList";
import { IDialogsPageType } from "../../redux/state";
import Chatbox from "../Chatbox";

type IDialogsPagePropsTypes = {
  dialogsPage: IDialogsPageType;
};

function DialogsPage({ dialogsPage }: IDialogsPagePropsTypes) {
  const { dialogs, messages } = dialogsPage;
  return (
    <div className={`block ${scss.dialogs}`}>
      <div className={scss.dialogs__list}>
        <DialogsList dialogs={dialogs} />
      </div>
      {/*<MessagesList messages={messages} />*/}
      <Chatbox messages={messages} />
    </div>
  );
}

export default DialogsPage;
