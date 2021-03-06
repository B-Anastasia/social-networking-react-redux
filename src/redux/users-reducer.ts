import {followApi, usersApi} from "../api/api";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IRootStateType} from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_USER = 'TOGGLE_FOLLOWING_USER';

type ILocationType = {
    city: string,
    country: string
}

export type IPhotosUserType = {
    small: string
    large: string
}

export type IUserType = {
    id: number,
    name: string,
    photos: IPhotosUserType,
    followed: boolean,
    status: string
    location: ILocationType
}

export type IUsersType = {
    items: Array<IUserType>,
    pageSize: number,
    totalCount: number,
    currentPage: number
    isFetching: boolean,
    followingUsersInProcess: Array<number>
}

type IFollowActionType = {
    type: typeof FOLLOW,
    userId: number
}
type IUnfollowActionType = {
    type: typeof UNFOLLOW,
    userId: number
}

type ISetUsersActionType = {
    type: typeof SET_USERS,
    items: Array<IUserType>
}
type ISetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    payload: { currentPage: number }
}
type ISetTotalCountActionType = {
    type: typeof SET_TOTAL_COUNT,
    payload: { totalCount: number }
}

type IToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    payload: { isFetching: boolean }
}
type IToggleFollowingUserActionType = {
    type: typeof TOGGLE_FOLLOWING_USER
    payload: {
        userId: number,
        isFollowing: boolean
    }
}

let initialState: IUsersType = {
    items: [],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingUsersInProcess: []
}


const usersReducer = (state: IUsersType = initialState, action: IUsersACsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                items: state.items.map(u => u.id === action.userId ?
                    {...u, followed: true}
                    : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                items: state.items.map(u => (u.id === action.userId) ? {...u, followed: false} : u)
            }
        case SET_USERS:

            return {
                ...state,
                items: [...action.items]
            }
        case SET_CURRENT_PAGE: {
            return {...state, ...action.payload}
        }
        case SET_TOTAL_COUNT: {
            return {...state, ...action.payload}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, ...action.payload}
        }
        case TOGGLE_FOLLOWING_USER: {
            return {
                ...state,
                followingUsersInProcess: action.payload.isFollowing
                    ? [...state.followingUsersInProcess, action.payload.userId]
                    : state.followingUsersInProcess.filter((id) => id !== action.payload.userId)
            }
        }
        default:
            return state;
    }
}

//Action Creators

export type IUsersACsType =
    IFollowActionType
    | IUnfollowActionType
    | ISetUsersActionType
    | ISetCurrentPageActionType
    | ISetTotalCountActionType
    | IToggleIsFetchingActionType
    | IToggleFollowingUserActionType;


export const followSuccess = (userId: number): IFollowActionType => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId: number): IUnfollowActionType => ({type: UNFOLLOW, userId});
export const setUsers = (items: Array<IUserType>): ISetUsersActionType => ({type: SET_USERS, items})
export const changeCurrentPage = (currentPage: number): ISetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    payload: {currentPage}
})
export const setTotalCount = (totalCount: number): ISetTotalCountActionType => ({
    type: SET_TOTAL_COUNT,
    payload: {totalCount}
})
export const toggleIsFetching = (isFetching: boolean): IToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    payload: {isFetching}
})
export const toggleFollowingUser = (userId: number, isFollowing: boolean): IToggleFollowingUserActionType => ({
    type: TOGGLE_FOLLOWING_USER,
    payload: {userId, isFollowing}
})


// reusable Thunk type

export type IUsersThunkType<ReturnType = void> = ThunkAction<ReturnType,
    IRootStateType,
    unknown,
    IUsersACsType>

export type IThunkDispatchUsersType = ThunkDispatch<IRootStateType,
    unknown,
    IUsersACsType>

//Thunk

export const getUsers = (currentPage: number, pageSize: number): IUsersThunkType => {
    return (dispatch: IThunkDispatchUsersType) => {
        dispatch(toggleIsFetching(true))
        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
            dispatch(toggleIsFetching(false));
        })
    }
}

export const unfollow = (userId:number):IUsersThunkType=>{
    return (dispatch:IThunkDispatchUsersType)=> {
        dispatch(toggleFollowingUser(userId, true));
        followApi.unfollowUser(userId).then(resultCode => {
            if (resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingUser(userId, false))
        })
    }
}
export const follow = (userId:number):IUsersThunkType=>{
    return (dispatch:IThunkDispatchUsersType)=> {
        dispatch(toggleFollowingUser(userId, true));
        followApi.followUser(userId).then(resultCode => {
            if (resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingUser(userId, false))
        })
    }
}

export default usersReducer;