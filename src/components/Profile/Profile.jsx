import React from 'react';
import classes from './Profile.module.css';
import Posts from './MyPosts/Posts';
import ProfileInfo from './ProfileInfo/ProgileInfo';



const Profile = (props) => {


        return <div>
                    <ProfileInfo />
                    <Posts postData = {props.postData} />
                </div>
}

export default Profile;
