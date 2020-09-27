import {Actions, IPostType} from "./store";
import {v1} from "uuid";
import {IProfileInfoType} from "../types/types";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IRootStateType} from "./redux-store";
import {profileApi} from "../api/api";
import {IFieldsPostType} from "../components/Posts/MyPosts";

const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';

export type IProfileInfoPageType = {
    posts: Array<IPostType>;
    profile: IProfileInfoType | null;
    // newPostText: string;
    status: string
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
    // newPostText: "value1",
    status: ''
};

const profileReducer = (
    state: IProfileInfoPageType = initialState,
    action: Actions
): IProfileInfoPageType => {
    switch (action.type) {
        // case "UPDATE_INPUT_VALUE":
        //     return {...state, newPostText: action.payload};
        case "SET_PROFILE":
            return {
                ...state,
                profile: action.payload
            }
        case "ADD_NEW_POST":
            const newPost: IPostType = {
                id: v1(),
                text: action.payload.newPostText,
                count: 0,
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.payload
            }
        default:
            return state;
    }
};

const ADD_NEW_POST = "ADD_NEW_POST";
const UPDATE_INPUT_VALUE = "UPDATE_INPUT_VALUE";

//Actions Types
type IAddNewPostType = {
    type: typeof ADD_NEW_POST
    payload:IFieldsPostType
};
type IUpdInputValueType = {
    type: typeof UPDATE_INPUT_VALUE;
    payload: string;
};
type ISetProfileType = {
    type: typeof SET_PROFILE;
    payload: IProfileInfoType;
};
type ISetStatusType = {
    type: typeof SET_STATUS;
    payload: string;
};
//Action creators
export const addNewPostAC = (payload:IFieldsPostType): IAddNewPostType => ({type: ADD_NEW_POST,payload});
export const updateInputValueAC = (text: string): IUpdInputValueType => ({
    type: UPDATE_INPUT_VALUE,
    payload: text,
});
export const setProfile = (payload: IProfileInfoType): ISetProfileType => ({type: SET_PROFILE, payload})
export const setStatus = (status: string): ISetStatusType => ({type: SET_STATUS, payload: status})
//All ACreators union type
export type IProfileActions = IAddNewPostType | IUpdInputValueType | ISetProfileType | ISetStatusType;
//---------------------------

//Thunks

// reusable Thunk type

export type IProfileThunkType<ReturnType = void> = ThunkAction<ReturnType,
    IRootStateType,
    unknown,
    IProfileActions>

export type IThunkDispatchProfileType = ThunkDispatch<IRootStateType,
    unknown,
    IProfileActions>

export const getUserProfile = (userId: number): IProfileThunkType => (dispatch: IThunkDispatchProfileType) => {

    profileApi
        .getProfile(userId)
        .then(response => dispatch(setProfile(response)))
}

export const getStatus = (userId: number): IProfileThunkType => (dispatch: IThunkDispatchProfileType) => {
    profileApi
        .getStatus(userId)
        .then(response => dispatch(setStatus(response)))
}

export const updateStatus = (status: string): IProfileThunkType => (dispatch: IThunkDispatchProfileType) => {
    profileApi
        .updateStatus(status)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}

export default profileReducer;
