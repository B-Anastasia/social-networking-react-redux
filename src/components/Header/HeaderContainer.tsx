import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuth} from "../../redux/auth-reducer";
import {IRootStateType} from "../../redux/redux-store";

type IMapStateType={
    isAuth:boolean
    login:string|null
    id: number|null
}
type IMapDispatchType={
    setAuth:()=>void
}

type ICommonPropsType= IMapStateType & IMapDispatchType;

class HeaderContainer extends React.Component<ICommonPropsType>{

    componentDidMount() {
        this.props.setAuth();
    }

    render() {
       return <Header  {...this.props} id={this.props.id} isAuth={this.props.isAuth} login={this.props.login} />
    }
}

let mapStateToProps=(state:IRootStateType)=>{
    return {id: state.auth.id,
    isAuth: state.auth.isAuth,
    login:state.auth.login}
}


export  default connect<IMapStateType,IMapDispatchType,{},IRootStateType>(mapStateToProps,{setAuth})(HeaderContainer);


