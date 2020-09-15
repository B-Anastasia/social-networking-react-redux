import {IAuthType} from "../types/types";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {IRootStateType} from "./redux-store";
import {authApi} from "../api/api";

const SET_AUTH_DATA='SET_AUTH_DATA';

const initialState:IAuthType={
    email:null,
    id:null,
    login:null,
    isAuth:false,
}

export const  authReducer=(state=initialState,action:ICommonACType):IAuthType=>{
    switch (action.type){
        case SET_AUTH_DATA:
            return {
                ...state,
                ...action.payload,
                isAuth:true
            }
        default:
            return state
    }
}

export type IUserAuthType={
    id: number | null
    email: string | null
    login: string | null
}

type ISetAuthDataAC={
    type: typeof SET_AUTH_DATA,
    payload: IUserAuthType
}

type ICommonACType=ISetAuthDataAC;

export const setAuthData= (payload:IUserAuthType):ISetAuthDataAC=>({
    type: SET_AUTH_DATA,
    payload
})

// reusable Thunk type

export type IAuthThunkType<ReturnType = void> = ThunkAction<ReturnType,
    IRootStateType,
    unknown,
    ICommonACType>

export type IThunkDispatchAuthType = ThunkDispatch<IRootStateType,
    unknown,
    ICommonACType>

export const setAuth = ():IAuthThunkType=>(dispatch:IThunkDispatchAuthType)=>{

    authApi.getAuthData()
        .then(response => {
            console.log(response);
            if (response.resultCode=== 0) {
                const {id, email, login} = response.data;
                dispatch(setAuthData({id, email, login}))
            }
        })
}
