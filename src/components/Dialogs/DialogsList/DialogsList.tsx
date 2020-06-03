import React from "react";
import scss from "./DialogsList.module.scss";
import { NavLink } from "react-router-dom";

function DialogsList() {
  return (
    <div className={scss.dialogsList}>
      <div className={`${scss.dialogsList__item} ${scss.active}`}>
        <NavLink to={"/dialogs/1"}>Dima</NavLink>
      </div>
      <div className={scss.dialogsList__item}>
        <NavLink to={"/dialogs/2"}>Andr</NavLink>
      </div>
      <div className={scss.dialogsList__item}>
        <NavLink to={"/dialogs/3"}>Aleks</NavLink>
      </div>
      <div className={scss.dialogsList__item}>
        <NavLink to={"/dialogs/4"}>Kira</NavLink>
      </div>
      <div className={scss.dialogsList__item}>
        <NavLink to={"/dialogs/5"}>Sem</NavLink>
      </div>
      <div className={scss.dialogsList__item}>
        <NavLink to={"/dialogs/6"}>Felix</NavLink>
      </div>
    </div>
  );
}

export default DialogsList;
