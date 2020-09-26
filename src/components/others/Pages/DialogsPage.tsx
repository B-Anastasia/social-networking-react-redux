import React from "react";
import scss from "./Pages.module.scss";
import StoreContext from "../../../StoreContext";
import DialogsList from "../DialogsList";

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
                    </div>
                );
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsPage;
