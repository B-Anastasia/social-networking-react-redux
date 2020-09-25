import React, {ChangeEvent} from "react";
import {INewMessageType,} from "../../redux/store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type INewMessagePropsType = {
    newMessageText: string
    onClickAddNewMessage: (newMessage: INewMessageType) => void
    onChangeInputValue: (newValue: string) => void
};
type IFieldsType={
    newMessageBody:string
}
type IOwnProps ={
}


const AddMessageForm:React.FC<InjectedFormProps<IFieldsType> & IOwnProps > =(props)=>{
    return(
         <form onSubmit={props.handleSubmit}>
             <Field component={'textarea'} name={'newMessageBody'} placeholder={"New message text"}/>
        <button>Send</button>
    </form>
    )
}
const AddMessageFormRedux=reduxForm<IFieldsType,IOwnProps>({
    form:'dialogAddMessageForm'}
    )(AddMessageForm)

function NewMessage(props: INewMessagePropsType) {
const { onClickAddNewMessage, onChangeInputValue}=props;
    const message = React.createRef<HTMLTextAreaElement>();

    const onClickAddNewMessageHandler = () => {
        if (message.current) {
            let text = message.current?.value;
            // text.trim() && addNewMessage(text, "Aleks", undefined, undefined);
            let newMessage: INewMessageType = {
                text: text,
                name: "Alex",
            };
            text.trim() && onClickAddNewMessage(newMessage);
            onChangeInputValue("");
        }
    };

    const onSubmitAddNewMessageHandler=(data:IFieldsType)=>{
        console.log(data)
    }

    const onChangeInputValueHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeInputValue(e.currentTarget.value);
    };

    return (
        <div>
            <AddMessageFormRedux onSubmit={onSubmitAddNewMessageHandler}/>
        </div>
    );
}

export default NewMessage;

