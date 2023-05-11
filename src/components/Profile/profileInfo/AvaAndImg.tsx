import React from 'react';
import style from './AvaAndImg.module.css'
import {ProfileType} from "redux/profileReducer";
import {Preloader} from "components/common/Preloader";
import fondImage from '../../../accets/images/fond_Image.jpg'

type AvaAndImgPropsType = {
    profile: ProfileType
}

export const AvaAndImg = (props: AvaAndImgPropsType) => {

    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={fondImage} alt="picture"/>
            </div>
            <div className={style.descriptionBlock}>

                <img src={props.profile.photos.small}/>
                ava + description
            </div>
        </div>
    );
};
