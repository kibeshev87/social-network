import React from "react";
import {authApi, DataType} from "redux/socialNetworkApi";
import {HeaderFC} from "components/headers/HeaderFC";
import {AppRootStateType} from "redux/reduxStore";
import {setAuthUserDataAC} from "redux/authReducer";
import {connect} from "react-redux";

type HeaderContainerPropsType = {
    setAuthUserDataAC: (data: DataType) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    componentDidMount() {
        authApi.authMy()
            .then(res => {
                if(res.data.resultCode === 0) {
                    this.props.setAuthUserDataAC(res.data.data)
                }
            })
            .catch(err => {
                console.error(err.message)
            })
    }

    render() {
        return (
            <>
                <HeaderFC/>
            </>)
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {}
}


export default connect(mapStateToProps,
    {setAuthUserDataAC})(HeaderContainer)










