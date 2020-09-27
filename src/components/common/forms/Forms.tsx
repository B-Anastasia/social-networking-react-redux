import React from "react";
import scss from './Forms.module.scss';

export const Textarea = (props:any) => {
    return <FormControl {...props}>
        <textarea {...props.input} {...props}/>
    </FormControl>

}
export const Input = (props:any) => {
    return <FormControl {...props}>
        <input {...props.input} {...props}/>
    </FormControl>

}

export const FormControl =({input, meta, ...props}: any)=>{
    const {error, touched} = meta;
    const showError = error && touched;

    return <div className={showError
        ? `${scss.form} ${scss.error}`
        : scss.form}>
        {props.children}
        {error && touched && <span className={scss.error__span}>{error}</span>}
    </div>
}