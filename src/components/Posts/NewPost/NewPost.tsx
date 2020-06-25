import React from "react";
import styles from "./NewPost.module.css";

type PropsType = {
  addNewPost: () => void;
  newPostText: string;
  updateInputValue: (value: string) => void;
};

function NewPost({ addNewPost, newPostText, updateInputValue }: PropsType) {
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
    addNewPost();
    updateInputValue(""); //after adding post
  };

  const onInputValue = () => {
    if (newPost.current) {
      let text = newPost.current.value;
      updateInputValue(text);
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
