import {Dispatch} from "react";
import {addNewPostAC, IProfileActions, updateInputValueAC} from "../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {IRootStateType} from "../../redux/redux-store";

/*type PropsTypes = {
    // store: Store<CombinedState<IStateType>, Actions>;
    /!* profilePage: IProfilePageType;
      newPostText: string;
    dispatch: Dispatch<Actions>;*!/
};*/
/*
function MyPostsContainer() {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                const onClickAddPost = () => {
                    store.dispatch(addNewPostAC());
                    store.dispatch(updateInputValueAC(""));
                };

                const onChangeInputValue = (newValue: string) => {
                    store.dispatch(updateInputValueAC(newValue));
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
}*/
const mapStateToProps=(state:IRootStateType)=>({profilePage:state.profilePage,
    status:state.profilePage.status,
    newPostText:state.profilePage.newPostText});
const mapDispatchToProps=(dispatch:Dispatch<IProfileActions>)=>{
    return {
        onChangeInputValue:(newValue:string)=>dispatch(updateInputValueAC(newValue)),
        onClickAddPost: ()=>dispatch(addNewPostAC())}
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
