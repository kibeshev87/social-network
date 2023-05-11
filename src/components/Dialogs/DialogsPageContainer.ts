import {addMessageAC} from "redux/dialogsReducer";
import {connect} from "react-redux";
import {DialogsPage} from "./DialogsPage";
import {Dispatch} from "redux";
import {AppRootStateType} from "redux/reduxStore";

/*type DialogsPagePropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export const DialogsPageContainer = (props: DialogsPagePropsType) => {

    const dispatch = useDispatch()

    const addMessage = (message: string) => {
        dispatch(addMessageAC(message))
    }

    return (
        <DialogsPage callback={addMessage} dialogs={props.dialogs} messages={props.messages}/>
    )
}*/

const mapStateToProps = (state: AppRootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        callback: (message: string) => {
            dispatch(addMessageAC(message))
        }
    }
}

export const DialogsPageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsPage)


