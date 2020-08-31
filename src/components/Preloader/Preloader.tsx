import React from "react";
import scss from './Preloader.module.scss';

const Preloader = ()=>{
    return(
        <div className={scss.lds_roller}>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    )
}

export default Preloader;