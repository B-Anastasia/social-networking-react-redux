import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/redux-store";
import "./index.scss";
import {BrowserRouter, Switch} from "react-router-dom";
import App from "./components/App";
import {Provider} from "react-redux";

ReactDOM.render(
    /*<React.StrictMode>*/
        < Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <App
                        /* store={store}
                         state={store.getState()}
                         dispatch={store.dispatch.bind(store)}*/
                        /*     updateInputValue={store.updateInputValue.bind(store)}
                        addNewPost={store.addNewPost.bind(store)}
                        addNewMessage={store.addNewMessage.bind(store)}*/
                    />
                </Switch>
            </BrowserRouter>
        </Provider>,
    /*</React.StrictMode>,*/
    document.getElementById("root")
)