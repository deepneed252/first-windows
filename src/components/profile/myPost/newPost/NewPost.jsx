import React from 'react';
import s from './NewPost.module.scss';

const NewPost = (props) => {
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.newpost}>
            <h3>My Posts</h3>
            <textarea onChange={onPostChange} ref={newPostElement} rows="5" value={props.newpost} />
            <button onClick={addPost}>Send</button>
        </div>
    );
}

export default NewPost;