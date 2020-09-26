import React from "react";
import scss from "./DialogsList.module.scss";
import DialogItem from "../../Dialogs/DialogItem/DialogItem";
import { IDialogType } from "../../../redux/store";

type IDialogsListPropsType = {
  dialogs: Array<IDialogType>;
};

function DialogsList({ dialogs }: IDialogsListPropsType) {
  const dialogsList = dialogs.map((d: IDialogType) => (
    <DialogItem key={d.id} id={d.id} profile={d} />
  ));

  return <div className={scss.dialogsList}>{dialogsList}</div>;
}

export default DialogsList;
