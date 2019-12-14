import React from 'react';
import classes from './Profile.module.css';
import Posts from './MyPosts/Posts';

const Profile = () => {
        return <div>
                    <div>
                        <img src='https://s1.1zoom.me/big0/994/260356-svetik.jpg'></img>
                    </div>
                    <div>
                        ava + description
                    </div>
                    <Posts />
                </div>
}

export default Profile;