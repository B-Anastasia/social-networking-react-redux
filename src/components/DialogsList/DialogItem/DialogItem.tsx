import React from "react";
import scss from "./DialogItem.module.scss";
import { NavLink } from "react-router-dom";
import { IDialogType } from "../../../redux/state";
import UserPost from "../../UserPost";

type IDialogItemPropsTypes = {
  id: string;
  name: string;
  profile: IDialogType;
};

function DialogItem({ id, name, profile }: IDialogItemPropsTypes) {
  return (
    <div id={id} className={`${scss.item} ${scss.active}`}>
      <NavLink
        to={`/dialogs/${id}`}
        activeClassName={scss.active}
        className={scss.item__info}
      >
        <UserPost profile={profile} />
      </NavLink>
    </div>
  );
}

export default DialogItem;
