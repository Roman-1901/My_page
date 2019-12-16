import React from 'react';
import classes from './Profile.module.css';
import Posts from './MyPosts/Posts';
import ProfileInfo from './ProfileInfo/ProgileInfo';

const Profile = () => {
        return <div>
                    <ProfileInfo />
                    <Posts />
                </div>
}

export default Profile;