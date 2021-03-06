import React from "react";
import scss from "./DialogItem.module.scss";
import {NavLink} from "react-router-dom";
import {IDialogType} from "../../../redux/store";
import UserPost from "../../UserPost";

type IDialogItemPropsTypes = {
  id: string;
  profile: IDialogType;
};

function DialogItem({ id, profile }: IDialogItemPropsTypes) {
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
