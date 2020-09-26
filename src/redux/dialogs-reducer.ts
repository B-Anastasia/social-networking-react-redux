import {Actions, IDialogType, IMessageType} from "./store";
import {v1} from "uuid";

export type IDialogsPageType = {
    dialogs: Array<IDialogType>;
    messages: Array<IMessageType>;
};

let initialState: IDialogsPageType = {
    dialogs: [
        {
            id: v1(),
            name: "Dima",
            src:
                "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
        },
        {
            id: v1(),
            name: "Andr",
            src:
                "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
        },
        {
            id: v1(),
            name: "Aleks",
            src:
                "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
        },
        {
            id: v1(),
            name: "Kira",
            src:
                "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
        },
        {
            id: v1(),
            name: "Sem",
            src:
                "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
        },
        {
            id: v1(),
            name: "Felix",
            src:
                "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
        },
        {
            id: v1(),
            name: "Artur",
            src:
                "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
        },
        {
            id: v1(),
            name: "Den",
            src:
                "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
        },
    ],
    messages: [
        {
            id: v1(),
            img:
                "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
            name: "Alisa",
            img_name: "Avatar",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit, non placeat quidem recusandae vero!",
            time: "11:00",
        },
        {
            id: v1(),
            img:
                "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
            name: "Alisa",
            img_name: "Avatar",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit, non placeat quidem recusandae vero!",
            time: "11:00",
        },
        {
            id: v1(),
            img:
                "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
            name: "Alisa",
            img_name: "Avatar",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit, non placeat quidem recusandae vero!",
            time: "11:00",
        },
        {
            id: v1(),
            img:
                "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
            name: "Alisa",
            img_name: "Avatar",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit, non placeat quidem recusandae vero!",
            time: "11:00",
        },
        {
            id: v1(),
            img:
                "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-512.png",
            name: "Alisa",
            img_name: "Avatar",
            text:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit, non placeat quidem recusandae vero!",
            time: "11:00",
        },
    ],
};

const dialogsReducer = (
    state: IDialogsPageType = initialState,
    action: Actions
): IDialogsPageType => {
    switch (action.type) {
        case "ADD_NEW_MESSAGE":
            const newMessage = {
                id: v1(),
                text:action.payload,
                name:'Alisa',
                img: "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
                img_name:"Avatar",
                time: `${new Date().getHours()}:${new Date().getMinutes()}`,
            };
            return {...state, messages:[...state.messages,newMessage]};
        default:
            return state;
    }
};

const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";

//Actions Types
type IAddNewMessageType = {
    type: typeof ADD_NEW_MESSAGE;
    payload: string;
};
//Action creators
export const addNewMessageAC = (
    newMessageBody: string
): IAddNewMessageType => ({type: ADD_NEW_MESSAGE, payload: newMessageBody});

//All ACreators union type
export type IDialogsActions = IAddNewMessageType;
//---------------------------

export default dialogsReducer;
