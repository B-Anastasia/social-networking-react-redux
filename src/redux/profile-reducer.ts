import {Actions, IPostType} from "./store";
import {v1} from "uuid";
import {IProfileInfoType} from "../types/types";

const SET_PROFILE = 'SET_PROFILE';

export type IProfileInfoPageType = {
    posts: Array<IPostType>;
    profile: IProfileInfoType | null;
    newPostText: string;
};

let initialState: IProfileInfoPageType = {
    /*profile: {
      id: v1(),
      name: "Den Fox",
      src:
        "https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg",
    },*/
    profile: null,
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
    state: IProfileInfoPageType = initialState,
    action: Actions
): IProfileInfoPageType => {
    switch (action.type) {
        case "UPDATE_INPUT_VALUE":
            return {...state, newPostText: action.payload};
        case "SET_PROFILE":
            return {
                ...state,
                profile: action.payload
            }
        case "ADD_NEW_POST":
            const newPost: IPostType = {
                id: v1(),
                text: state.newPostText,
                count: 0,
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
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
type ISetProfileType = {
    type: typeof SET_PROFILE;
    payload: IProfileInfoType;
};
//Action creators
export const addNewPostAC = (): IAddNewPostType => ({type: ADD_NEW_POST});
export const updateInputValueAC = (text: string): IUpdInputValueType => ({
    type: UPDATE_INPUT_VALUE,
    payload: text,
});
export const setProfile = (payload: IProfileInfoType): ISetProfileType => ({type: SET_PROFILE, payload})
//All ACreators union type
export type IProfileActions = IAddNewPostType | IUpdInputValueType | ISetProfileType;
//---------------------------

export default profileReducer;
