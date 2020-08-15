const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

type ILocationType = {
    city: string,
    country: string
}

type IUserType = {
    id: string,
    fullName: string,
    photoUrl: string,
    followed: boolean,
    status: string
    location: ILocationType
}

type IUsersType = {
    users: Array<IUserType>
}

type IFollowActionType = {
    type: typeof FOLLOW,
    userId: string
}
type IUnfollowActionType = {
    type: typeof UNFOLLOW,
    userId: string
}

type ISetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<IUserType>
}

let initialState: IUsersType = {
    users: []
}


const usersReducer = (state: IUsersType = initialState, action: IUsersACsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ?
                    {...u, followed: false}
                    : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ?
                    {...u, followed: true}
                    : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

type IUsersACsType = IFollowActionType | IUnfollowActionType | ISetUsersActionType;

export const followAC = (userId: string): IFollowActionType => ({type: FOLLOW, userId});
export const unfollowAC = (userId: string): IUnfollowActionType => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: Array<IUserType>): ISetUsersActionType => ({type: SET_USERS, users})


export default usersReducer;