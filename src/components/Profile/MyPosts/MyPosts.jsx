import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'


function MyPosts(props) {
   
    let postElements = props.postsData.map(p => <Post  message={p.post} like = {p.likesCount} />)

    return (
            <div className={s.posts}>
                <h2 className={s.posts__title}>Мои записи</h2>
                <div className={s.posts__new}>
                    <textarea className={s['posts__new-text']} placeholder="Введите текст" name="" id="" cols="30" rows="10"></textarea>
                    <button className={s['posts__new-btn']}>Отправить</button>
                </div>
                <div className={s.posts__list}>
                    {postElements}
                </div>
            </div>
    );
}

export default MyPosts;