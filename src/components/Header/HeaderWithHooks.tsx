import React, {useEffect} from "react";
import styles from "./Header.module.scss";
import Logo from "./Logo/Logo";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {IRootStateType} from "../../redux/redux-store";
import {IAuthType} from "../../types/types";
import {setAuth} from "../../redux/auth-reducer";

export default function HeaderWithHooks() {

    const auth = useSelector<IRootStateType, IAuthType>(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        //thunk
        dispatch(setAuth());
    }, [dispatch]);

    let login = auth.isAuth
        ? <NavLink to={'/profile/' + auth.id}>{auth.login}</NavLink>
        : <NavLink to={'/login'}>Login</NavLink>
    return (
        <header className={styles.header}>
            <div className={"container " + styles.header__body}>
                <Logo/>
                <div className={styles.login}>
                    {login}
                </div>
            </div>
        </header>
    );
}