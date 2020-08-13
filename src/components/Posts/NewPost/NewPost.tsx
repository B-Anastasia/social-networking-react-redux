import React  from "react";
import styles from "./NewPost.module.css";

type PropsType = {
  newPostText: string;
  onClickAddMessage: () => void;
  onChangeInputValue: (newValue: string) => void;
};

function NewPost({ newPostText, onClickAddMessage,onChangeInputValue }: PropsType) {
  let newPost = React.createRef<HTMLTextAreaElement>();

  const onButtonAddPost = () => {
    /*    if (newPost.current) {
      newPost.current.focus();
      let text = newPost.current.value; //or newPost.current?.value without current.focus() if
      if (text.trim()) {
        addNewPost(text);
      }
      addNewPost();
      updateInputValue(""); //after adding post
    }*/
    onClickAddMessage();
    onChangeInputValue("");
    // updateInputValue(""); //after adding post
  };

  const onInputValue = () => {
    if (newPost.current) {
      let text = newPost.current.value;
      onChangeInputValue(text);
      // updateInputValue(text);
    }
  };

  return (
    <div className={styles.post}>
      <textarea
        ref={newPost}
        onChange={onInputValue}
        placeholder={"New"}
        value={newPostText}
      />
      <button onClick={onButtonAddPost}>Add</button>
    </div>
  );
}

export default NewPost;
