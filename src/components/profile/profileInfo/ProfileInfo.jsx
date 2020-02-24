import React from 'react';
import s from './ProfileInfo.module.scss';

const ProfileInfo = (props) => {
    return (
        <>
            <div className={s.profile_bg}>
                <img src="https://bf-france.com/uploads/category/image/1/category_col12_in_9_banbf1.jpg" alt="" />
            </div>
            <div className={s.profile}>
                <img className={s.profile_ava} src="https://im0-tub-ru.yandex.net/i?id=130a3fd17a646c5ef51f74535b53da4f&n=13&exp=1" alt="" />
                <div className={s.desc}>
                    <h3>Jonh Smith</h3>
                    <div>Date of  Birth: <span>13 january</span></div>
                    <div>City: <span>Ufa</span></div>
                    <div>Education: <span>BSU'11</span></div>
                    <div>Web Site: <span>deepneed.ru</span></div>
                </div>
            </div>
        </>
    );
}

export default ProfileInfo;