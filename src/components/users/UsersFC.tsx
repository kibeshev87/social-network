import React from 'react';
import {UserType} from "redux/usersReducer";
import style from './users.module.css'
import iconAvatar from '../../accets/images/icon-avatar.png'
import { NavLink } from 'react-router-dom';


type UsersPropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onClickPageChangedCallback: (pageNumber: number) => void
    unFollowCallback: (id: number) => void
    followCallback: (id: number) => void
}

export const UsersFC = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    const followHandler = (id: number) => {
        props.followCallback(id)
    }

    const unFollowHandler = (id: number) => {
        props.unFollowCallback(id)
    }

    return (

        <div className={style.usersContainer}>
            <div className={style.pageNumbers}>
                {pages.map((el, index) => {
                    return <span key={index}
                                 onClick={() => props.onClickPageChangedCallback(el)}
                                 className={props.currentPage === el ? style.activePage : ''}> {el} </span>
                })}
            </div>
            {props.users.map((el: UserType) => (

                <ul key={el.id}>

                    <li className={style.listUsers}>
                        <NavLink to={`/profile/${el.id}`}>
                            <img className={style.avatarka} src={el.photos.small ? el.photos.small : iconAvatar}
                                 alt="avatar"/>
                            <span>{el.name}</span>
                        </NavLink>
                    </li>

                    <div>
                        {el.followed
                            ? <button onClick={() => unFollowHandler(el.id)}>Unfollow</button>
                            : <button onClick={() => followHandler(el.id)}>Follow</button>
                        }
                    </div>
                </ul>
            ))}
        </div>
    )
}

