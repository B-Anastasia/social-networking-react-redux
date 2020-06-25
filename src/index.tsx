import React from "react";
import ReactDOM from "react-dom";
import state, { subscribe } from "./redux/state";
// import state, { IStateType, subscribe } from "./redux/state";
import "./index.scss";
// import { IStateType } from "./redux/state";
import { BrowserRouter, Switch } from "react-router-dom";
import App from "./components/App";

let rerenderEntierTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <App state={state} />
        </Switch>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

rerenderEntierTree();
subscribe(rerenderEntierTree);
