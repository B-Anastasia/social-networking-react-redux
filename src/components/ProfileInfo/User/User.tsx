import React from "react";
import styles from "./User.module.css";
import {IProfileInfoType} from "../../../types/types";
import {NavLink} from "react-router-dom";

type IUserPropsType={
    profile:  IProfileInfoType|null
}

function User(props:IUserPropsType) {
    if(!props.profile){
        return null
    }
  return (
    <div className={styles.user}>
      <div className={styles.user__img}>
          <NavLink to={'/profile/'+props.profile.userId}>
        <img
          src={props.profile.photos.large || props.profile.photos.small ||"https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"}
          alt="user"
        />
          </NavLink>
      </div>
      <span className={styles.user__name}>{props.profile.fullName}</span>
      <span className={styles.user__about}>{props.profile.aboutMe}</span>
      <span className={styles.user__name}>{props.profile.lookingForAJob? 'Ищу работу':'Не ищу работу'}</span>
    </div>
  );
}

export default User;
