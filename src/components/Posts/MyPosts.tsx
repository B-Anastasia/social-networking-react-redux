import React from "react";
import { IPostType, IProfilePageType } from "../../redux/store";
import styles from "./MyPosts.module.scss";
import Post from "./Post";

type PropsTypes = {
  profilePage: IProfilePageType;
  newPostText: string;
  onClickAddPost: () => void;
  onChangeInputValue: (newValue: string) => void;
  // store: Store<CombinedState<IStateType>, Actions>;
};

function MyPosts(props: PropsTypes) {
  const {
    onChangeInputValue,
    profilePage,
    newPostText,
    onClickAddPost,
  } = props;

  const { posts, profile } = profilePage;

  const postsList = posts.map((p: IPostType) => (
    <Post key={p.id} message={p.text} count={p.count} profile={profile} />
  ));

  let newPost = React.createRef<HTMLTextAreaElement>();

  const onClickAddPostHandler = () => {
    onClickAddPost();
  };

  const onChangeInputValueHandler = () => {
    if (newPost.current) {
      let newValue = newPost.current.value;
      onChangeInputValue(newValue);
    }
  };

  return (
    <div>
      <div className={"header"}>My posts</div>
      <div className={styles.post}>
        <textarea
          ref={newPost}
          onChange={onChangeInputValueHandler}
          placeholder={"New"}
          value={newPostText}
        />
        <button onClick={onClickAddPostHandler}>Add</button>
      </div>
      <div className={styles.posts}>{postsList}</div>
      {/*<NewPost newPostText={newPostText} dispatch={dispatch} />*/}
      {/*<PostsList posts={posts} profile={profile} />*/}
    </div>
  );
}

export default MyPosts;
