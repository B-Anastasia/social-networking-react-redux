import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {IRootStateType} from "../../redux/redux-store";
import {getAuth} from "../../redux/auth-reducer";

type IMapStateType={
    isAuth:boolean
    login:string|null
    id: number|null
}
type IMapDispatchType={
    getAuth:()=>void
}

type ICommonPropsType= IMapStateType & IMapDispatchType;

class HeaderContainer extends React.Component<ICommonPropsType>{

    componentDidMount() {
        this.props.getAuth();
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


export  default connect<IMapStateType,IMapDispatchType,{},IRootStateType>(mapStateToProps,{ getAuth})(HeaderContainer);


