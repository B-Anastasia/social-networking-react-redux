import React from "react";
import "./App.scss";
import Header from "../Header";
import Navbar from "../Navbar";
import { Route } from "react-router-dom";
import News from "../News";
import Music from "../Music";
import Settings from "../Settings";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import { DialogsPage, ProfilePage } from "../Pages";
import { IActionType, IStateType, IStoreType } from "../../redux/store";
import Friends from "../Friends";

type IAppPropsType = {
  state: IStateType;
  dispatch: (action: IActionType) => void;
  store: IStoreType;
  /*  addNewPost: () => void;
  updateInputValue: (value: string) => void;
  addNewMessage: (
    text: string,
    name: string,
    imgUrl?: string,
    img_name?: string
  ) => void;*/
};

function App({ store, state, dispatch }: IAppPropsType) {
  const { profilePage, sidebar } = state;
  return (
    <div className="app-wrapper">
      <Header />
      <Route path="/profile" component={ProfileInfo} />
      <div className="app-wrapper__content container">
        <Navbar />
        <Friends friends={sidebar.friends} />
        <Route
          path="/profile"
          render={() => (
            <ProfilePage
              dispatch={dispatch}
              profilePage={profilePage}
              newPostText={profilePage.newPostText}
            />
          )}
        />
        <Route path="/dialogs" render={() => <DialogsPage store={store} />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
