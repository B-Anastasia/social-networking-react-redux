import { Actions, IDialogType, IPostType } from "./store";
import { v1 } from "uuid";

export type IProfilePageType = {
  posts: Array<IPostType>;
  profile: IDialogType;
  newPostText: string;
};

let initialState: IProfilePageType = {
  profile: {
    id: v1(),
    name: "Den Fox",
    src:
      "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
  },
  posts: [
    {
      id: v1(),
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
      count: 10,
    },
    {
      id: v1(),
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
      count: 15,
    },
    {
      id: v1(),
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
      count: 15,
    },
    {
      id: v1(),
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
      count: 15,
    },
    {
      id: v1(),
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
      count: 15,
    },
    {
      id: v1(),
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
      count: 15,
    },
    {
      id: v1(),
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
      count: 20,
    },
  ],
  newPostText: "value1",
};

const profileReducer = (
  state: IProfilePageType = initialState,
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
