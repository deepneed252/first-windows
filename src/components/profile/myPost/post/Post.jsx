import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img className={s.profile_ava} src="https://im0-tub-ru.yandex.net/i?id=130a3fd17a646c5ef51f74535b53da4f&n=13&exp=1" alt="" />
            <div>
                <p>{props.message}</p>
                <span>Likes: {props.likeCount}</span>
            </div>
        </div>
    );
}

export default Post;