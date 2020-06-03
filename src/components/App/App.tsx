import React from "react";
import "./App.scss";
import Header from "../Header";
import Navbar from "../Navbar";
import User from "../User";
import CoverImage from "../CoverImage";
import MyPosts from "../Posts";
import Dialogs from "../Dialogs";
import { Route } from "react-router-dom";
import News from "../News";
import Music from "../Music";
import Settings from "../Settings";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <CoverImage />
      <User />
      <div className="app-wrapper__content">
        <Navbar />
        <Route path="/profile" component={MyPosts} />
        <Route path="/dialogs" component={Dialogs} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  );
}

export default App;
