import React from 'react';
import style from './ProfileInfo.module.css'
//
// type ProfilePropsType = {
//     images: string
// }

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://media.gettyimages.com/photos/leadership-concept-with-paper-airplanes-picture-id1132930101?s=612x612'/>
            </div>
            <div className={style.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo