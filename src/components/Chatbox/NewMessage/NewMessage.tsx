import React from "react";

type PropsType = {
  addNewMessage: (
    text: string,
    name: string,
    imgUrl?: string,
    img_name?: string
  ) => void;
};

function NewMessage({ addNewMessage }: PropsType) {
  const message = React.createRef<HTMLTextAreaElement>();

  const addButtonNewMessage = () => {
    if (message.current) {
      let text = message.current?.value;
      text.trim() && addNewMessage(text, "Aleks", undefined, undefined);
    }
  };

  return (
    <div>
      <textarea ref={message} name="message" placeholder={"New"} />
      <button onClick={addButtonNewMessage}>Add</button>
    </div>
  );
}

export default NewMessage;
