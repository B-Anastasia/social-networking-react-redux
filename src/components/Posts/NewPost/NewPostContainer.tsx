import {connect} from "react-redux";
import NewPost from "./NewPost";
import {IStateType} from "../../../redux/store";
import {Dispatch} from "react";
import {addNewPostAC, IProfileActions, updateInputValueAC} from "../../../redux/profile-reducer";

let mapStateToProps=(state:IStateType)=>({newPostText:state.profilePage.newPostText});
let mapDispatchToProps=(dispatch:Dispatch<IProfileActions>)=>{
    return {
        onClickAddNewMessage: ()=>dispatch(addNewPostAC()),
        onChangeInputValue:(newValue:string)=>dispatch(updateInputValueAC(newValue))
}}

const NewPostContainer=connect(mapStateToProps,mapDispatchToProps)(NewPost);
export default NewPostContainer;