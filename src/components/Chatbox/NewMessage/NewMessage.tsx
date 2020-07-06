import React, { ChangeEvent } from "react";
import { INewMessageType, IStoreType } from "../../../redux/store";
import {
  addNewMessage,
  updateInputNewMessage,
} from "../../../redux/dialogs-reducer";

type PropsType = {
  store: IStoreType;
};

function NewMessage({ store }: PropsType) {
  const message = React.createRef<HTMLTextAreaElement>();
  const newMessage = store.getState().dialogsPage.newMessageText;
  const addButtonNewMessage = () => {
    if (message.current) {
      let text = message.current?.value;
      // text.trim() && addNewMessage(text, "Aleks", undefined, undefined);
      let newMessage: INewMessageType = {
        text: text,
        name: "Alex",
      };
      text.trim() && store.dispatch(addNewMessage(newMessage));
      store.dispatch(updateInputNewMessage(""));
    }
  };

  const onChangeInputValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    store.dispatch(updateInputNewMessage(e.currentTarget.value));
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
