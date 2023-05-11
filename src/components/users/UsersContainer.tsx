import React from 'react';
import {AxiosError} from 'axios';
import {
    followAC,
    setCurrentPageAC,
    setIsLoadingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from 'redux/usersReducer';
import {UsersFC} from 'components/users/UsersFC';
import {Preloader} from "components/common/Preloader";
import {AppRootStateType} from "redux/reduxStore";
import {connect} from "react-redux";
import {networkApi} from "redux/socialNetworkApi";


type MapStatePropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}

type MapDispatchPropsType = {
    followAC: (id: number) => void
    unFollowAC: (id: number) => void
    setUsersAC: (users: UserType[]) => void
    setCurrentPageAC: (currentPage: number) => void
    setTotalUsersCountAC: (totalCount: number) => void
    setIsLoadingAC: (isFetching: boolean) => void
}

type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.setIsLoadingAC(true)
        networkApi.setUsers(this.props.currentPage, this.props.pageSize)
        // axios
        //     .get(`https://social-network.samuraijs.com/api/1.0/users
            //     ?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsersAC(res.data.items)
                this.props.setTotalUsersCountAC(res.data.totalCount)
                this.props.setIsLoadingAC(false)
            })
            .catch((err: AxiosError) => {
                console.error('Some error')
            })
    }
    onClickPageChangedHandler = (pageNumber: number) => {
        this.props.setIsLoadingAC(true)
        this.props.setCurrentPageAC(pageNumber)
        networkApi.onClickChangePage(pageNumber, this.props.pageSize)
        // axios
        //     .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((res) => {
                this.props.setUsersAC(res.data.items)
                this.props.setIsLoadingAC(false)
            })
            .catch((err: AxiosError) => {
                console.error('Some error')
            })
    }

    render() {
        return <>
            {this.props.isLoading ? <Preloader/> : null}

            <UsersFC
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onClickPageChangedCallback={this.onClickPageChangedHandler}
                followCallback={this.props.followAC}
                unFollowCallback={this.props.unFollowAC}
            />
        </>
    }
}
const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}


export default connect(mapStateToProps, {
    followAC,
    unFollowAC,
    setUsersAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setIsLoadingAC
})(UsersContainer)
