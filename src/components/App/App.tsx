import React from "react";
import "./App.scss";
import Navbar from "../Navbar";
import {Route} from "react-router-dom";
import News from "../News";
import Music from "../Music";
import Settings from "../Settings";
import Friends from "../Friends";
import HeaderWithHooks from "../Header/HeaderWithHooks";
import ProfileContainer from "../Profile/ProfileContainer";
import UsersHooks from "../Users/UsersHooks";

function App() {
    return (
        <div className="app-wrapper">
            {/*<HeaderContainer />*/}
            <HeaderWithHooks/>
            {/*<Route path="/profile" component={ProfileInfo}/>*/}
            <div className="app-wrapper__content container">
                <Navbar/>
                <Friends/>
                <Route path='/profile/:userId?' component={ProfileContainer}/>
                <Route path='/users' component={UsersHooks}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
