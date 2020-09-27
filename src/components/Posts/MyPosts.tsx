import React from "react";
import {IPostType} from "../../redux/store";
import styles from "./MyPosts.module.scss";
import Post from "./Post";
import {IProfileInfoPageType} from "../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validator";
import {Textarea} from "../common/forms/Forms";

type PropsTypes = {
    profilePage: IProfileInfoPageType | null;
    addNewPostAC: (dataForm:IFieldsPostType)=>void
};

const lengthMax=maxLength(10);

function MyPosts(props: PropsTypes) {
    const {
        profilePage,
    } = props;

    const postsList = profilePage !== null
        && profilePage.posts !== null
        && profilePage.posts.map((p: IPostType) => (
            <Post key={p.id} message={p.text} count={p.count} profile={profilePage.profile}/>
        ));

    const onSubmitPost = (dataForm: IFieldsPostType) => {
        props.addNewPostAC(dataForm)
    }

    return (
        <div>
            <div className={"header"}>My posts</div>
            <div className={styles.post}>
                <PostReduxForm onSubmit={onSubmitPost}/>
            </div>
            <div className={styles.posts}>{postsList}</div>
        </div>
    );
}

export default MyPosts;


export type IFieldsPostType = {
    newPostText: string
}
type IOwnProps = {}

const PostForm: React.FC<InjectedFormProps<IFieldsPostType> & IOwnProps> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   placeholder={'Post'}
                   name={'newPostText'}
                   validate={[required,lengthMax]}
            />
            <button>Send post</button>
        </form>
    )
}


const PostReduxForm = reduxForm<IFieldsPostType, IOwnProps>({
    form: 'post'
})(PostForm)

