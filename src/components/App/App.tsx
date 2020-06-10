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
import { IStateType } from "../../index";

type PropsType = {
  state: IStateType;
};

function App({ state }: PropsType) {
  const { profilePage, dialogsPage } = state;
  return (
    <div className="app-wrapper">
      <Header />
      <Route path="/profile" component={ProfileInfo} />
      <div className="app-wrapper__content container">
        <Navbar />
        <Route
          path="/profile"
          component={() => <ProfilePage profilePage={profilePage} />}
        />
        <Route
          path="/dialogs"
          component={() => <DialogsPage dialogsPage={dialogsPage} />}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
