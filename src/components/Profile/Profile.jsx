import React from 'react';
import classes from './Profile.module.css';
import Posts from './MyPosts/Posts';
import ProfileInfo from './ProfileInfo/ProgileInfo';



const Profile = (props) => {


        return <div>
                    <ProfileInfo profileInfo = {props.ProfilePage.profileInfo}/>
                    <Posts newPostText = {props.ProfilePage.newPostText} postData = {props.ProfilePage.postData} profileAvatar = {props.ProfilePage.profileAvatar} dispatch = {props.dispatch} />
                </div>
}

export default Profile;
