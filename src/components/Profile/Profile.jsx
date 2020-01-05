import React from 'react';
import PostsContainer from './MyPosts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProgileInfo';



const Profile = (props) => {
    let ProfilePage = props.ProfilePage;

        return <div>
                    <ProfileInfo profileInfo = {ProfilePage.profileInfo}/>
                    <PostsContainer ProfilePage />
                </div>
}

export default Profile;
