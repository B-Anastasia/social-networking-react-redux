import React, {ChangeEvent} from "react";

type IProfileStatusPropsType = {
    status: string,
    updateStatus: (status: string) => void
}

type IProfileStatusType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<IProfileStatusPropsType, IProfileStatusType> {
    constructor(props: IProfileStatusPropsType) {
        super(props);
        this.state = {
            editMode: false,
            status: this.props.status
        };
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
        this.props.updateStatus(this.state.status)
    }

    onChangeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return !this.state.editMode
            ? <span onDoubleClick={this.activeEditMode}>{this.props.status || '----------'}</span>
            : <input autoFocus onChange={this.onChangeStatus} onBlur={this.deactivateEditMode.bind(this)}
                     value={this.state.status}/>;
    }
}

export default ProfileStatus;