import React from "react";
import scss from './Forms.module.scss';

export const Textarea = ({input, meta, ...props}: any) => {
    const {error, touched} = meta;
    const showError = error && touched;

    return <div className={showError
        ? `${scss.form} ${scss.error}`
        : scss.form}>
        <textarea {...input} {...props}/>
        {error && touched && <span className={scss.error__span}>{error}</span>}
    </div>
}