import React from "react";
import scss from "./Pages.module.scss";
import DialogsList from "../DialogsList";
import MessagesList from "../MessagesList";
import { IDialogsPageType } from "../..";

type IDialogsPagePropsTypes = {
  dialogsPage: IDialogsPageType;
};

function DialogsPage({ dialogsPage }: IDialogsPagePropsTypes) {
  const { dialogs, messages } = dialogsPage;
  return (
    <div className={`block ${scss.dialogs}`}>
      <DialogsList dialogs={dialogs} />
      <MessagesList messages={messages} />
    </div>
  );
}

export default DialogsPage;
