import React, { Dispatch } from "react";
import scss from "./Pages.module.scss";
import DialogsList from "../DialogsList";
import { Actions, IDialogsPageType } from "../../redux/store";
import Chatbox from "../Chatbox";

type IDialogsPagePropsTypes = {
  dialogsPage: IDialogsPageType;
  dispatch: Dispatch<Actions>;
};

function DialogsPage({ dialogsPage, dispatch }: IDialogsPagePropsTypes) {
  return (
    <div className={`block ${scss.dialogs}`}>
      <div className={scss.dialogs__list}>
        <DialogsList dialogs={dialogsPage.dialogs} />
      </div>
      <Chatbox dialogsPage={dialogsPage} dispatch={dispatch} />
    </div>
  );
}

export default DialogsPage;
