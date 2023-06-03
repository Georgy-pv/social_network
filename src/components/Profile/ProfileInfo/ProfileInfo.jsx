import React from 'react';
import s from './ProfileInfo.module.css'


function ProfileInfo() {
    return (
        <div className={s.profile__wrapper}>
            <div className={s.profile__background}></div>
            <div className={s.profile__inner}>
                <div className={s.profile__card}>
                    <div className={s.profile__avatar}>
                        <img className={s.avatar} src="https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png" alt="" />
                    </div>
                    <div className={s.profile__info}>
                        <div className={s.name}>Георгий</div><div className={s.surname}>Павлов</div>
                        <div className={s.birthday}>
                            Дата рождения: 10 ноября
                        </div>
                        <div className={s.education}>
                            Образование: РУДН'22
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;