import React from "react";
import styles from './NewPost.module.css';

function NewPost() {
    return (
        <div className={styles.post}>
            <textarea>New</textarea>
            <button>Add New</button>
            <button>Remove</button>
        </div>
    )
}

export default NewPost;