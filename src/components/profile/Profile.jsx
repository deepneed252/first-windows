import React from 'react';
import MyPost from './myPost/MyPost';
import ProfileInfo from './profileInfo/ProfileInfo';
import NewPost from './myPost/newPost/NewPost';



const Profile = (props) => {

    return (
        <>
            <ProfileInfo />
            <NewPost addPost={props.addPost} newpost={props.state.newPostText} updateNewPostText={props.updateNewPostText}/>
            <MyPost posts={props.state.posts} />
        </>
    );
}

export default Profile;