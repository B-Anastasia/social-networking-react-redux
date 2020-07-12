import React, {ChangeEvent} from "react";
import {
    INewMessageType,
} from "../../../redux/store";

type INewMessagePropsType = {
    newMessageText: string
    onClickAddNewMessage: (newMessage: INewMessageType) => void
    onChangeInputValue: (newValue: string) => void
    // store: IStoreType;
    // dialogsPage: IDialogsPageType;
    // dispatch: Dispatch<Actions>;
};

function NewMessage({newMessageText, onClickAddNewMessage, onChangeInputValue}: INewMessagePropsType) {

    const message = React.createRef<HTMLTextAreaElement>();

    const onClickAddNewMessageHandler = () => {
        if (message.current) {
            let text = message.current?.value;
            // text.trim() && addNewMessage(text, "Aleks", undefined, undefined);
            let newMessage: INewMessageType = {
                text: text,
                name: "Alex",
            };
            text.trim() && onClickAddNewMessage(newMessage);
            onChangeInputValue("");
        }
    };

    const onChangeInputValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeInputValue(e.currentTarget.value);
    };

    return (
        <div>
      <textarea
          value={newMessageText}
          ref={message}
          name="message"
          placeholder={"New"}
          onChange={onChangeInputValueHandler}
      />
            <button onClick={onClickAddNewMessageHandler}>Add</button>
        </div>
    );
}

export default NewMessage;
