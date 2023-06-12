import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'


function MyPosts(props) {
   
    let postElements = props.postsData.map(p => <Post key={p.id} message={p.post} like = {p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.updateNewPostChange(newText);
    }

    return (
            <div className={s.posts}>
                <h2 className={s.posts__title}>Мои записи</h2>
                <div className={s.posts__new}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} className={s['posts__new-text']} placeholder="Введите текст" name="" id="" cols="30" rows="10" />
                    <button onClick={addPost} className={s['posts__new-btn']}>Отправить</button>
                </div>
                <div className={s.posts__list}>
                    {postElements}
                </div>
            </div>
    );
}

export default MyPosts;