import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let rootReducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer
});
export type IRootStateType = ReturnType<typeof rootReducers>;

let store: Store = createStore(rootReducers);
declare global {
  interface Window {
    store:Store;
  }
}

window.store=store;
export default store;
