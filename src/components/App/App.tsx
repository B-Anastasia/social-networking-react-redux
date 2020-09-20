import React from "react";
import "./App.scss";
import Navbar from "../Navbar";
import {Route} from "react-router-dom";
import News from "../News";
import Music from "../Music";
import Settings from "../Settings";
import Friends from "../Friends";
import UsersHooks from "../Users/UsersHooks";
import HeaderContainer from "../Header/HeaderContainer";
import Login from "../Login/Login";
import DialogsContainer from "../Dialogs/DialogsContainer";
import ProfileWithHooks from "../Profile/ProfileWithHooks";

// import UsersContainer from "../Users/UsersContainer";

function App() {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            {/*<HeaderWithHooks/>*/}
            {/*<Route path="/profile" component={ProfileInfo}/>*/}
            <div className="app-wrapper__content container">
                <Navbar/>
                <Friends/>
                {/*<Route path='/profile/:userId?' component={ProfileContainer}/>*/}
                <Route path='/profile/:userId?' component={ProfileWithHooks}/>
                <Route path='/users' component={UsersHooks}/>
                <Route path='/login' component={Login}/>
                <Route path='/dialogs' component={DialogsContainer}/>
                {/*<Route path='/users' component={UsersContainer}/>*/}
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
