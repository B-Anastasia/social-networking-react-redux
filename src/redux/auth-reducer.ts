import {IAuthType} from "../types/types";

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
