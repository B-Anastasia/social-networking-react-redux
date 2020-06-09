import React from "react";
import "./App.scss";
import Header from "../Header";
import Navbar from "../Navbar";
import Dialogs from "../Dialogs";
import { Route } from "react-router-dom";
import News from "../News";
import Music from "../Music";
import Settings from "../Settings";
import ProfilePage from "../Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      {/*<ProfilePage />*/}
      {/*<CoverImage />*/}
      {/*<User />*/}
      <div className="app-wrapper__content container">
        <Navbar />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
