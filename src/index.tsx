import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App";
import { BrowserRouter, Switch } from "react-router-dom";
import { v1 } from "uuid";

export type IPostType = {
  id: string;
  text: string;
  count: number;
};

export type IDialogType = {
  id: string;
  name: string;
};
export type IMessageType = {
  id: string;
  text: string;
};

export type IProfilePageType = {
  posts: Array<IPostType>;
};

export type IDialogsPageType = {
  dialogs: Array<IDialogType>;
  messages: Array<IMessageType>;
};

export type IStateType = {
  profilePage: IProfilePageType;
  dialogsPage: IDialogsPageType;
  sidebar: ISidebarType;
};

export type ISidebarType = {};

const state: IStateType = {
  profilePage: {
    posts: [
      {
        id: v1(),
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
        count: 10,
      },
      {
        id: v1(),
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
        count: 15,
      },
      {
        id: v1(),
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias debitis deserunt dignissimos distinctio dolorem eaque earum, enim eveniet exercitationem iste mollitia nostrum perferendis provident quam quas quis saepe soluta voluptate!",
        count: 20,
      },
    ],
  },
  dialogsPage: {
    dialogs: [
      { id: v1(), name: "Dima" },
      { id: v1(), name: "Andr" },
      { id: v1(), name: "Aleks" },
      { id: v1(), name: "Kira" },
      { id: v1(), name: "Sem" },
      { id: v1(), name: "Felix" },
      { id: v1(), name: "Artur" },
      { id: v1(), name: "Den" },
    ],
    messages: [
      { id: v1(), text: "Hi" },
      { id: v1(), text: "How are you?" },
      { id: v1(), text: "I'm fine!" },
      { id: v1(), text: "What are doing?" },
      { id: v1(), text: "I'm learning React!" },
    ],
  },
  sidebar: {},
};

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
