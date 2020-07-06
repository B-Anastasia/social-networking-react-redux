import { Actions, IPostType, IProfilePageType } from "./store";
import { v1 } from "uuid";

const profileReducer = (
  state: IProfilePageType,
  action: Actions
): IProfilePageType => {
  switch (action.type) {
    case "UPDATE_INPUT_VALUE":
      state.newPostText = action.payload;
      return state;
    case "ADD_NEW_POST":
      const newPost: IPostType = {
        id: v1(),
        text: state.newPostText,
        count: 0,
      };
      state.posts.unshift(newPost);
      state.newPostText = "";
      return state;
    default:
      return state;
  }
};

const ADD_NEW_POST = "ADD_NEW_POST";
const UPDATE_INPUT_VALUE = "UPDATE_INPUT_VALUE";

//Actions Types
type IAddNewPostType = {
  type: typeof ADD_NEW_POST;
};
type IUpdInputValueType = {
  type: typeof UPDATE_INPUT_VALUE;
  payload: string;
};
//Action creators
export const addNewPost = (): IAddNewPostType => ({ type: ADD_NEW_POST });
export const updateInputValue = (text: string): IUpdInputValueType => ({
  type: UPDATE_INPUT_VALUE,
  payload: text,
});

//All ACreators union type
export type IProfileActions = IAddNewPostType | IUpdInputValueType;
//---------------------------

export default profileReducer;
