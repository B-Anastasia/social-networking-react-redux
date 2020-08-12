import { createStore, combineReducers, Store } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let rootReducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
});
export type RootState = ReturnType<typeof rootReducers>;

let store: Store = createStore(rootReducers);
export default store;
