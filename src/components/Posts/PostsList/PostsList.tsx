import React from "react";
import styles from './PostsList.module.css';
import Post from "../Post";

function PostsList() {
    return (
        <div className={styles.posts}>
            <div>
                <Post
                    message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!'}
                    count={10}
                />
                < Post
                    message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aut delectus distinctio eligendi illo ipsum maiores numquam perspiciatis quas quis, quisquam recusandae, sapiente similique sint ullam! Adipisci dolorem porro vel.'}
                    count={15}/>
                < Post
                message={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur, consequuntur enim iste itaque, mollitia odit quibusdam quisquam quo soluta totam veniam. Dignissimos doloremque, in iusto laboriosam magnam modi soluta!'}
                count={20}/>
            </div>
        </div>
    )
}

export default PostsList;