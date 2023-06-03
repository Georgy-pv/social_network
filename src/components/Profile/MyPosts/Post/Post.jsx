import React from 'react';
import s from './Post.module.css'


function Post(props) {
    
    return (
        <div className={s.posts__item}>
            <div className={s.posts__avatar}>
                <img className={s.posts__img} src="https://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png" alt="Аватарка" />
            </div>
            <div className={s.posts__txt}>
                {props.message}
                <div className={s.posts__like}>Нравится: {props.like}</div>
            </div>
        </div>
    );
}

export default Post;