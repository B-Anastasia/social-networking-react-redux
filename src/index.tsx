import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/redux-store";
import "./index.scss";
import { BrowserRouter, Switch } from "react-router-dom";
import App from "./components/App";
import StoreContext from "./StoreContext";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
            <StoreContext.Provider value={store}>


          <App
           /* store={store}
            state={store.getState()}
            dispatch={store.dispatch.bind(store)}*/
            /*     updateInputValue={store.updateInputValue.bind(store)}
            addNewPost={store.addNewPost.bind(store)}
            addNewMessage={store.addNewMessage.bind(store)}*/
          />
            </StoreContext.Provider>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntireTree();
store.subscribe(rerenderEntireTree);
