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
import { IStateType } from "../../redux/state";
import Friends from "../Friends";

type IAppPropsType = {
  state: IStateType;
};

function App({ state }: IAppPropsType) {
  const { profilePage, dialogsPage, sidebar } = state;
  return (
    <div className="app-wrapper">
      <Header />
      <Route path="/profile" component={ProfileInfo} />
      <div className="app-wrapper__content container">
        <Navbar />
        <Friends friends={sidebar.friends} />
        <Route
          path="/profile"
          render={() => <ProfilePage profilePage={profilePage} />}
        />
        <Route
          path="/dialogs"
          render={() => <DialogsPage dialogsPage={dialogsPage} />}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
