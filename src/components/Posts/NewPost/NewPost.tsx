import React, { Dispatch } from "react";
import styles from "./NewPost.module.css";
import { Actions } from "../../../redux/store";
import { addNewPost, updateInputValue } from "../../../redux/profile-reducer";

type PropsType = {
  newPostText: string;
  dispatch: Dispatch<Actions>;
};

function NewPost({ newPostText, dispatch }: PropsType) {
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
    dispatch(addNewPost());
    dispatch(updateInputValue(""));
    // updateInputValue(""); //after adding post
  };

  const onInputValue = () => {
    if (newPost.current) {
      let text = newPost.current.value;
      dispatch(updateInputValue(text));
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
