import React from "react";
import DialogsList from "./DialogsList";
import MessagesList from "./MessagesList";
import scss from "./Dialogs.module.scss";

function Dialogs() {
  return (
    <div className={`block ${scss.dialogs}`}>
      <DialogsList />
      <MessagesList />
    </div>
  );
}
export default Dialogs;
