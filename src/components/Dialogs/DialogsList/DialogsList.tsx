import React from "react";
import scss from "./DialogsList.module.scss";
import { NavLink } from "react-router-dom";
import { v1 } from "uuid";

type IDialogType = {
  id: string;
  name: string;
};

function DialogsList() {
  let dialogs: IDialogType[] = [
    { id: v1(), name: "Dima" },
    { id: v1(), name: "Andr" },
    { id: v1(), name: "Aleks" },
    { id: v1(), name: "Kira" },
    { id: v1(), name: "Sem" },
    { id: v1(), name: "Felix" },
    { id: v1(), name: "Artur" },
    { id: v1(), name: "Den" },
  ];

  const dialogsList = dialogs.map((d: IDialogType) => (
    <div key={d.id} className={`${scss.dialogsList__item} ${scss.active}`}>
      <NavLink to={`/dialogs/${d.id}`}>{d.name}</NavLink>
    </div>
  ));

  return <div className={scss.dialogsList}>{dialogsList}</div>;
}

export default DialogsList;
