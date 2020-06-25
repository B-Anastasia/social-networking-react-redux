import React from "react";
import scss from "./Pages.module.scss";
import DialogsList from "../DialogsList";
import { IDialogsPageType } from "../../redux/state";
import Chatbox from "../Chatbox";

type IDialogsPagePropsTypes = {
  dialogsPage: IDialogsPageType;
  addNewMessage: (
    text: string,
    name: string,
    imgUrl?: string,
    img_name?: string
  ) => void;
};

function DialogsPage({ dialogsPage, addNewMessage }: IDialogsPagePropsTypes) {
  const { dialogs, messages } = dialogsPage;
  return (
    <div className={`block ${scss.dialogs}`}>
      <div className={scss.dialogs__list}>
        <DialogsList dialogs={dialogs} />
      </div>
      <Chatbox addNewMessage={addNewMessage} messages={messages} />
    </div>
  );
}

export default DialogsPage;
