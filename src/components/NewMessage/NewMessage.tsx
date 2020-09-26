import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type INewMessagePropsType = {
    onClickAddNewMessage: (newMessageBody: string) => void
};
type IFieldsType = {
    newMessageBody: string
}
type IOwnProps = {}

function NewMessage(props: INewMessagePropsType) {
    const {onClickAddNewMessage} = props;

    const onSubmitAddNewMessageHandler = ({newMessageBody}: IFieldsType) => {
        if (newMessageBody.trim()) onClickAddNewMessage(newMessageBody)
    }

    return (
        <div>
            <AddMessageFormRedux onSubmit={onSubmitAddNewMessageHandler}/>
        </div>
    );
}

const AddMessageForm: React.FC<InjectedFormProps<IFieldsType> & IOwnProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessageBody'} placeholder={"New message text"}/>
            <button>Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<IFieldsType, IOwnProps>({
        form: 'dialogAddMessageForm'
    }
)(AddMessageForm)

export default NewMessage;