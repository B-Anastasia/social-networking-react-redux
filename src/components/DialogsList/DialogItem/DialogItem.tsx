import React from "react";
import scss from "./DialogItem.module.scss";
import { NavLink } from "react-router-dom";
import { IDialogType } from "../../../index";

function DialogItem({ id, name }: IDialogType) {
  return (
    <div id={id} className={`${scss.item} ${scss.active}`}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
}

export default DialogItem;
