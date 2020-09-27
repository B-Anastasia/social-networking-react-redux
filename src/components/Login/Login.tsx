import React from "react";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input} from "../common/forms/Forms";
import {maxLength, required} from "../../utils/validator";

type IFieldsType={
    loginName:string
    password:string
    remember:boolean
}
type IOwnProps ={
}

const lengthPassword= maxLength(15)
const lengthLogin= maxLength(10)

const LoginForm:React.FC<InjectedFormProps<IFieldsType> & IOwnProps>= (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       placeholder={'Login'}
                       name={'loginName'}
                       validate={[required, lengthLogin]}
                       type={'text'}
                />
            </div>
            <div>
                <Field component={Input}
                       placeholder={'Password'}
                       name={'password'}
                       validate={[required, lengthPassword]}
                       type={'text'}
                />
            </div>
            <div>
                <div>
                    <Field
                        component={Input}
                        name={'remember'}
                        type={'checkbox'}
                    />
                </div>
                <label htmlFor="remember">remember me</label>
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

