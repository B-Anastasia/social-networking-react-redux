import React from "react";
import scss from "./Pages.module.scss";
import DialogsList from "../DialogsList";
import {Actions, IStateType} from "../../redux/store";
import Chatbox from "../Chatbox";
import {CombinedState, Store} from "redux";

type IDialogsPagePropsTypes = {
    store: Store<CombinedState<IStateType>, Actions>;
    /* dialogsPage: IDialogsPageType;
     dispatch: Dispatch<Actions>;*/
};

function DialogsPage({store}: IDialogsPagePropsTypes) {
    return (
        <div className={`block ${scss.dialogs}`}>
            <div className={scss.dialogs__list}>
                <DialogsList dialogs={store.getState().dialogsPage.dialogs}/>
            </div>
            <Chatbox store={store}/>
        </div>
    );
}

export default DialogsPage;
