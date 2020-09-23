import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type IFieldsType={
    loginName:string
    password:string
    remember:boolean
}
type IOwnProps ={
}

const LoginForm:React.FC<InjectedFormProps<IFieldsType> & IOwnProps>= (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} type="text" placeholder={'Login'} name={'loginName'}/>
            </div>
            <div>
                <Field component={'input'} type="text" placeholder={'Password'} name={'password'}/>
            </div>
            <div>
                <label>
                    <Field component={'input'} type='checkbox' name={'remember'}/>
                    remember me
                </label>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<IFieldsType,IOwnProps>({
    form: 'login'
})(LoginForm)

const Login = () => {
    const onSubmit= (formData:IFieldsType)=>{
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <br/>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;

