export type IContactsType = {
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
}

export type IPhotosType = {
    small: null | string
    large: null | string
}

export type IProfileInfoType = {
    aboutMe?: string
    userId: number | string
    lookingForAJob?: boolean
    lookingForAJobDescription?: string | null
    fullName: string | null
    contacts?: IContactsType
    photos?: IPhotosType
}



export type IAuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type IDataType<P={}>={
    data: P
    resultCode: number
    messages:Array<string>
}

