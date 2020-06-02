import React from "react";
import NewPost from "./NewPost";
import PostsList from "./PostsList";

 function MyPosts() {
    return (
        <div>
            <div className={'header'}>My posts</div>
            <NewPost/>
            <PostsList/>
        </div>
    )
}

export default MyPosts;