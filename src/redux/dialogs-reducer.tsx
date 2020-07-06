import { Actions, INewMessageType, IDialogsPageType } from "./store";
import { v1 } from "uuid";

const dialogsReducer = (
  state: IDialogsPageType,
  action: Actions
): IDialogsPageType => {
  switch (action.type) {
    case "UPDATE_INPUT_NEW_MESSAGE":
      state.newMessageText = action.payload;
      return state;
    case "ADD_NEW_MESSAGE":
      const {
        text,
        name,
        imgUrl = "https://image.freepik.com/free-vector/woman-girl-female-cartoon-avatar-icon_25030-13349.jpg",
        img_name = "Avatar",
      } = action.payload;
      const newMessage = {
        id: v1(),
        text: text,
        name: name,
        img: imgUrl,
        img_name: img_name,
        time: `${new Date().getHours()}:${new Date().getMinutes()}`,
      };
      state.messages.push(newMessage);
      return state;
    default:
      return state;
  }
};

const UPDATE_INPUT_NEW_MESSAGE = "UPDATE_INPUT_NEW_MESSAGE";
const ADD_NEW_MESSAGE = "ADD_NEW_MESSAGE";

//Actions Types
type IAddNewMessageType = {
  type: typeof ADD_NEW_MESSAGE;
  payload: INewMessageType;
};
type IUpdInputMessage = {
  type: typeof UPDATE_INPUT_NEW_MESSAGE;
  payload: string;
};
//Action creators
export const addNewMessage = (
  newMessage: INewMessageType
): IAddNewMessageType => ({ type: ADD_NEW_MESSAGE, payload: newMessage });
export const updateInputNewMessage = (text: string): IUpdInputMessage => ({
  type: UPDATE_INPUT_NEW_MESSAGE,
  payload: text,
});

//All ACreators union type
export type IDialogsActions = IAddNewMessageType | IUpdInputMessage;
//---------------------------

export default dialogsReducer;
