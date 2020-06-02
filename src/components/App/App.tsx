import React from "react";
import "./App.css";
import Header from "../Header";
import Navbar from "../Navbar";
import User from "../User";
import CoverImage from "../CoverImage";
// import MyPosts from "../Posts";
import Dialogs from "../Dialogs";

function App() {
  return (
    <div className="app-wrapper">
      <div className={"app-wrapper__cover"}>
        <Header />
        <CoverImage />
        <User />
        <div className="app-wrapper__content">
          <Navbar />
          <Dialogs />
          {/*<MyPosts />*/}
        </div>
      </div>
    </div>
  );
}

export default App;
