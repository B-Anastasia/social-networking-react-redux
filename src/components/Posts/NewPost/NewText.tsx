import React from "react";
import styles from "./NewPost.module.css";

function NewText() {
  let newPost = React.createRef<HTMLTextAreaElement>();

  const onButtonAdd = () => {
    if (newPost.current) {
      newPost.current.focus();
      let text = newPost.current.value;
      alert(text.trim() ? text : "Put please some value");
    }
  };

  return (
    <div className={styles.post}>
      <textarea ref={newPost} placeholder={"New"} />
      <button onClick={onButtonAdd}>Add</button>
      <button>Remove</button>
    </div>
  );
}

export default NewText;
