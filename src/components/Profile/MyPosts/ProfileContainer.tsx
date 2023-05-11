import React from 'react';
import {ProfileFC} from "components/profile/myPosts/Profile";
import {connect} from "react-redux";
import {AppRootStateType} from "redux/reduxStore";
import {ProfileType, setFriendUserProfileAC} from "redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {networkApi} from "redux/socialNetworkApi";


type PathParamsType = {
    userId: string
}
type OwnProfileClassPropsType = MapStatePropsType & MapDispatchPropsType

type ProfileClassPropsType = RouteComponentProps<PathParamsType> & OwnProfileClassPropsType

type MapStatePropsType = {
    profile: ProfileType
}
type MapDispatchPropsType = {
    setFriendUserProfileAC: (profile: ProfileType) => void
}

class ProfileContainer extends React.Component<ProfileClassPropsType> {


    componentDidMount() {

        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '20500'
        }
        networkApi.setFriendProfiles(userId)
            // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(res => {
                this.props.setFriendUserProfileAC(res.data)
            })
    }

    render() {
        return (
            <div>
                <ProfileFC profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const WithRouterProfileType = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setFriendUserProfileAC})
(WithRouterProfileType)

