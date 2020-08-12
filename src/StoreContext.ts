import React from "react";
import {Store} from "redux";
import store from "./redux/redux-store";


const StoreContext = React.createContext<Store>(store);

/*export type IProviderType={
    value:IStoreType;
    children:any;
}

export const Provider =(props:IProviderType)=>{
    return (
        <StoreContext.Provider value={props.value}>
            {props.children}
        </StoreContext.Provider>
    )
}*/
export default StoreContext;