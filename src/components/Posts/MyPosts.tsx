import React from "react";
import {IPostType} from "../../redux/store";
import styles from "./MyPosts.module.scss";
import Post from "./Post";
import {IProfileInfoPageType} from "../../redux/profile-reducer";

type PropsTypes = {
  profilePage: IProfileInfoPageType|null;
  // newPostText: string;
  // onClickAddPost: () => void;
  // onChangeInputValue: (newValue: string) => void;
  // store: Store<CombinedState<IStateType>, Actions>;
};

function MyPosts(props: PropsTypes) {
  const {
    profilePage,
    // onChangeInputValue,
    // newPostText,
    // onClickAddPost,
  } = props;

  const postsList =profilePage!==null && profilePage.posts!==null && profilePage.posts.map((p: IPostType) => (
    <Post key={p.id} message={p.text} count={p.count} profile={profilePage.profile} />
  ));

  let newPost = React.createRef<HTMLTextAreaElement>();

  const onClickAddPostHandler = () => {
    // onClickAddPost();
    // onChangeInputValue('');
  };

  const onChangeInputValueHandler = () => {
    // if (newPost.current) {
    //   let newValue = newPost.current.value;
    //   onChangeInputValue(newValue);
    // }
  };

  return (
    <div>
      <div className={"header"}>My posts</div>
      <div className={styles.post}>
        <textarea
          ref={newPost}
          onChange={onChangeInputValueHandler}
          placeholder={"New"}
        />
        <button onClick={onClickAddPostHandler}>Add</button>
      </div>
      <div className={styles.posts}>{postsList}</div>
    </div>
  );
}

export default MyPosts;
