import { Actions, ISidebarType } from "./store";

const sidebarReducer = (state: ISidebarType, action: Actions): ISidebarType => {
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
