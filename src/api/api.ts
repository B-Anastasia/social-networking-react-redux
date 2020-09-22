import axios, {AxiosInstance} from 'axios';
import {IUsersType} from "../redux/users-reducer";
import {IAuthType, IDataType, IProfileInfoType} from "../types/types";

const instance: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY': '1f62f832-199c-4198-bcf8-fa36b24e67ca'
    }
});

export const usersApi = {
    getUsers(currentPage: number = 1, pageSize: number = 10): Promise<IUsersType> {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
}

export const followApi = {
    followUser(userId:number):Promise<number>{
        return instance
            .post(`follow/${userId}`)
            .then(response=>response.data.resultCode)
    },
    unfollowUser(userId:number):Promise<number>{
        return instance
            .delete(`follow/${userId}`)
            .then(response=>response.data.resultCode)
    }
}

export const profileApi = {
    getProfile(userId:number):Promise<IProfileInfoType>{
        return instance
            .get(`profile/${userId}`)
            .then(response=>response.data)
    },
    getStatus(userId:number):Promise<string>{
        return instance
            .get(`profile/status/${userId}`)
            .then(response=>response.data)
    },
    updateStatus(status:string):Promise<IDataType>{
        return instance
            .put(`profile/status`,{status})
            .then(response=>response.data)
    }
}

export const authApi = {
    getAuthData():Promise<IDataType<IAuthType>>{
        return instance
            .get(`auth/me`)
            .then(response=>response.data)
    }
}