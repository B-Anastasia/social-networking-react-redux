import React from "react";
import "./App.scss";
import Header from "../Header";
import Navbar from "../Navbar";
import {Route} from "react-router-dom";
import News from "../News";
import Music from "../Music";
import Settings from "../Settings";
import Friends from "../Friends";
// import UsersContainer from "../Users/UsersContainer";
// import UsersHooks from "../Users/UsersHooks";
import ProfileContainer from "../Profile/ProfileContainer";
import UsersHooks from "../Users/UsersHooks";

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
    // const {sidebar} = state;
    return (
        <div className="app-wrapper">
            <Header/>
            {/*<Route path="/profile" component={ProfileInfo}/>*/}
            <div className="app-wrapper__content container">
                <Navbar/>
                <Friends/>

                <Route
                    path="/profile"
                    render={() => (
                        <ProfileContainer
                            // store={store}
                            /*dispatch={dispatch}
                            profilePage={profilePage}
                            newPostText={profilePage.newPostText}*/
                        />
                    )}
                />
                {/*<Route
                        path="/dialogs"
                        render={() => (
                            <DialogsPage
                                // store={store}
                            />
                        )}
                    />*/}
                {/*<Route path='/users' component={UsersContainer}/>*/}
                <Route path='/users' component={UsersHooks}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
