import React from "react";

type IProfileStatusPropsType = {
    status: string
}

type IProfileStatusType = {
    editMode: boolean
}

class ProfileStatus extends React.Component<IProfileStatusPropsType, IProfileStatusType> {

    constructor(props: IProfileStatusPropsType) {
        super(props);
        this.state = {editMode: false};

    }

    activeEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return !this.state.editMode
            ? <span onDoubleClick={this.activeEditMode}>{this.props.status}</span>
            : <input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>;
    }
}

export default ProfileStatus;