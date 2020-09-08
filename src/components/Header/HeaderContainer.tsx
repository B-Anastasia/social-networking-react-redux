import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {IUserAuthType, setAuthData} from "../../redux/auth-reducer";
import {IRootStateType} from "../../redux/redux-store";

type IMapStateType={
    isAuth:boolean
    login:string|null
    id: number|null
}
type IMapDispatchType={
    setAuthData:(payload:IUserAuthType)=>void
}

type ICommonPropsType= IMapStateType & IMapDispatchType;

class HeaderContainer extends React.Component<ICommonPropsType>{

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true})
            .then(response => {
                    console.log(response.data)
                if(response.data.resultCode===0){
                    const {id,email,login}=response.data.data;
                    this.props.setAuthData({id,email,login})
                }
            })
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


export  default connect<IMapStateType,IMapDispatchType,{},IRootStateType>(mapStateToProps,{setAuthData})(HeaderContainer);


