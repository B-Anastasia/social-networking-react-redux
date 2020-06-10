import React from "react";
import scss from "./DialogsList.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import { IDialogType } from "../../index";

type IDialogsListPropsType = {
  dialogs: Array<IDialogType>;
};

function DialogsList({ dialogs }: IDialogsListPropsType) {
  const dialogsList = dialogs.map((d: IDialogType) => (
    <DialogItem key={d.id} id={d.id} name={d.name} />
  ));

  return <div className={scss.dialogsList}>{dialogsList}</div>;
}

export default DialogsList;
