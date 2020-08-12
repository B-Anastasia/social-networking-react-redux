import React from "react";
import scss from "./Pages.module.scss";
import DialogsList from "../DialogsList";
import Chatbox from "../Chatbox";
import StoreContext from "../../StoreContext";

/*type IDialogsPagePropsTypes = {
    // store: Store<CombinedState<IStateType>, Actions>;
    /!* dialogsPage: IDialogsPageType;
     dispatch: Dispatch<Actions>;*!/
};*/

function DialogsPage() {
    return (
        <StoreContext.Consumer>
            {(store) => {
                return (
                    <div className={`block ${scss.dialogs}`}>
                        <div className={scss.dialogs__list}>
                            <DialogsList dialogs={store.getState().dialogsPage.dialogs}/>
                        </div>
                        <Chatbox/>
                    </div>
                );
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsPage;
