import React from "react";
import scss from "./Pages.module.scss";
import DialogsList from "../DialogsList";
import { IStoreType } from "../../redux/store";
import Chatbox from "../Chatbox";

type IDialogsPagePropsTypes = {
  store: IStoreType;
};

function DialogsPage({ store }: IDialogsPagePropsTypes) {
  return (
    <div className={`block ${scss.dialogs}`}>
      <div className={scss.dialogs__list}>
        <DialogsList dialogs={store.getState().dialogsPage.dialogs} />
      </div>
      <Chatbox store={store} />
    </div>
  );
}

export default DialogsPage;
