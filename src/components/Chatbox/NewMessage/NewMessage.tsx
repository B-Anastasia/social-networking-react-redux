import React, { ChangeEvent, Dispatch } from "react";
import {
  Actions,
  IDialogsPageType,
  INewMessageType,
} from "../../../redux/store";
import {
  addNewMessage,
  updateInputNewMessage,
} from "../../../redux/dialogs-reducer";

type PropsType = {
  // store: IStoreType;
  dialogsPage: IDialogsPageType;
  dispatch: Dispatch<Actions>;
};

function NewMessage({ dispatch, dialogsPage }: PropsType) {
  const message = React.createRef<HTMLTextAreaElement>();
  const newMessage = dialogsPage.newMessageText;
  const addButtonNewMessage = () => {
    if (message.current) {
      let text = message.current?.value;
      // text.trim() && addNewMessage(text, "Aleks", undefined, undefined);
      let newMessage: INewMessageType = {
        text: text,
        name: "Alex",
      };
      text.trim() && dispatch(addNewMessage(newMessage));
      dispatch(updateInputNewMessage(""));
    }
  };

  const onChangeInputValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateInputNewMessage(e.currentTarget.value));
  };

  return (
    <div>
      <textarea
        value={newMessage}
        ref={message}
        name="message"
        placeholder={"New"}
        onChange={onChangeInputValueHandler}
      />
      <button onClick={addButtonNewMessage}>Add</button>
    </div>
  );
}

export default NewMessage;
