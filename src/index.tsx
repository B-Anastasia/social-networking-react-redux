import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App";
import { BrowserRouter, Switch } from "react-router-dom";
import state from "./redux/state";

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
serviceWorker.unregister();
