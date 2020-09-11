import React from "react";
import "./App.scss";
import Navbar from "../Navbar";
import {Route} from "react-router-dom";
import News from "../News";
import Music from "../Music";
import Settings from "../Settings";
import Friends from "../Friends";
import UsersContainer from "../Users/UsersContainer";
import HeaderWithHooks from "../Header/HeaderWithHooks";
import ProfileContainer from "../Profile/ProfileContainer";
// import ProfileWithHooks from "../Profile/ProfileWithHooks";
// import UsersHooks from "../Users/UsersHooks";

/*type IAppPropsType = {
  /!*  store: Store<CombinedState<IStateType>, Actions>|null;
    dispatch: Dispatch<Actions>;
    state: IStateType;*!/
    // dispatch: (action: IActionType) => void;
    // store: IStoreType;
    // store: Store<CombinedState<IStoreType>, Actions>;
    /!*  addNewPost: () => void;
    updateInputValue: (value: string) => void;
    addNewMessage: (
      text: string,
      name: string,
      imgUrl?: string,
      img_name?: string
    ) => void;*!/
};*/

function App() {
    return (
        <div className="app-wrapper">
            {/*<HeaderContainer />*/}
            <HeaderWithHooks/>
            {/*<Route path="/profile" component={ProfileInfo}/>*/}
            <div className="app-wrapper__content container">
                <Navbar/>
                <Friends/>

                {/*<Route path="/profile" render={() => (*/}
                {/*    <ProfileContainer*/}
                {/*        // store={store}*/}
                {/*        /*dispatch={dispatch}*/}
                {/*        profilePage={profilePage}*/}
                {/*        newPostText={profilePage.newPostText}*/}
                {/*    />)}/>*/}
                {/*<Route
                        path="/dialogs"
                        render={() => (
                            <DialogsPage
                                // store={store}
                            />
                        )}
                    />*/}
                <Route path='/profile/:userId?' component={ProfileContainer}/>
                {/*<Route path='/profile/:userId?' component={ProfileWithHooks}/>*/}
                <Route path='/users' component={UsersContainer}/>
                {/*<Route path='/users' component={UsersHooks}/>*/}
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
