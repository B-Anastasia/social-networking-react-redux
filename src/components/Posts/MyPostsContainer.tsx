import React from "react";
import {addNewPost, updateInputValue} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../StoreContext";

/*type PropsTypes = {
    // store: Store<CombinedState<IStateType>, Actions>;
    /!* profilePage: IProfilePageType;
      newPostText: string;
    dispatch: Dispatch<Actions>;*!/
};*/

function MyPostsContainer() {
    return (
        <StoreContext.Consumer>
            {(store) => {
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
                )
            }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
