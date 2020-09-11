import { Actions, IFriendType } from "./store";
import { v1 } from "uuid";

export type ISidebarType = {
  friends: Array<IFriendType>;
};

let initialState: ISidebarType = {
  friends: [
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
};

const sidebarReducer = (
  state: ISidebarType = initialState,
  action: Actions
): ISidebarType => {
  switch (action.type) {
    default:
      return state;
  }
};

/*const UPDATE_INPUT_NEW_MESSAGE = "UPDATE_INPUT_NEW_MESSAGE";
const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";*/

//Actions Types
/*type IAddNewMessageType = {
  type: typeof ADD_NEW_MESSAGE;
  payload: INewMessageType;
};
type IUpdInputMessage = {
  type: typeof UPDATE_INPUT_NEW_MESSAGE;
  payload: string;
};*/
//Action creators
/*export const addNewMessage = (
  newMessage: INewMessageType
): IAddNewMessageType => ({ type: ADD_NEW_MESSAGE, payload: newMessage });
export const updateInputNewMessage = (text: string): IUpdInputMessage => ({
  type: UPDATE_INPUT_NEW_MESSAGE,
  payload: text,
});*/

//All ACreators union type
// export type ISidebarActions = IAddNewMessageType | IUpdInputMessage;
//---------------------------

export default sidebarReducer;
