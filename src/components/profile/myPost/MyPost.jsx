import React from 'react';
import s from './MyPost.module.scss';
import Post from './post/Post';

const MyPost = (props) => {
    let postElements = props.posts.map(p => <Post message={p.message} likeCount={p.likesCount} />);
    return (

        <div className={s.MyPost}>
            {postElements}
        </div>
    );
}

export default MyPost;