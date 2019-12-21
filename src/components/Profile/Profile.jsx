import React from 'react';
import classes from './Profile.module.css';
import Posts from './MyPosts/Posts';
import ProfileInfo from './ProfileInfo/ProgileInfo';



const Profile = (props) => {


        return <div>
                    <ProfileInfo profileInfo = {props.state.profileInfo}/>
                    <Posts postData = {props.state.postData} profileAvatar = {props.state.profileAvatar} addPost = {props.addPost} />
                </div>
}

export default Profile;
