import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';

const Posts= () => {
    return  <div className={classes.posts}> 
                    My posts
                    <div>
                    <textarea></textarea>
                    <button>Add post</button>
                    </div>
                    <Post message = "My first post" image = "https://smartprogress.do/uploadImages/001018254.jpg" />
                    <Post message = "My second post" image = "https://besthqwallpapers.com/Uploads/17-10-2017/24364/minion-4k-security-guard-minions-despicable-me.jpg"/>
            </div>
            
}

export default Posts;