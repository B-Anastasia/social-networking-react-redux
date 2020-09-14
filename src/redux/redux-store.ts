import {combineReducers, createStore, Store, applyMiddleware} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk from "redux-thunk";


let rootReducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer
});
export type IRootStateType = ReturnType<typeof rootReducers>;

let store: Store = createStore(rootReducers, applyMiddleware(thunk));
declare global {
  interface Window {
    store:Store;
  }
}

window.store=store;
export default store;
