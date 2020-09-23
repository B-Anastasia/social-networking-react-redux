import React from "react";
import {IRootStateType} from "../redux/redux-store";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

interface IWithAuthProps {
    isAuth: boolean;
}

const mapStateToProps = (state: IRootStateType):IWithAuthProps => {
   return {isAuth: state.auth.isAuth}
}

export function withAuth <T>(Component:React.ComponentType<T>) {
    class WithAuth extends React.Component<IWithAuthProps>{
        render() {
            const { isAuth, ...children } = this.props;
             return isAuth? <Component {...children as T}/> : <Redirect to={'/login'}/>;
        }
    }

    return connect(mapStateToProps)(WithAuth);
}