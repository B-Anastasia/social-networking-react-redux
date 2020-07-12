import React from "react";
import { Actions, IStateType } from "../../redux/store";
import { CombinedState, Store } from "redux";
import { addNewPost, updateInputValue } from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";

type PropsTypes = {
  store: Store<CombinedState<IStateType>, Actions>;
  /* profilePage: IProfilePageType;
    newPostText: string;
    dispatch: Dispatch<Actions>;*/
};

function MyPostsContainer({ store }: PropsTypes) {
  let state = store.getState();

  const onClickAddPost = () => {
    store.dispatch(addNewPost());
    store.dispatch(updateInputValue(""));
  };

  const onChangeInputValue = (newValue: string) => {
    store.dispatch(updateInputValue(newValue));
  };
  return (
    <MyPosts
      onChangeInputValue={onChangeInputValue}
      onClickAddPost={onClickAddPost}
      profilePage={state.profilePage}
      newPostText={state.profilePage.newPostText}
    />
  );
}

export default MyPostsContainer;
