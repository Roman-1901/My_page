import React from 'react';
import PostsContainer from './MyPosts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProgileInfo';



const Profile = (props) => {
    let ProfilePage = props.store.getState().ProfilePage;

        return <div>
                    <ProfileInfo profileInfo = {ProfilePage.profileInfo}/>
                    <PostsContainer store = {props.store} />
                </div>
}

export default Profile;
