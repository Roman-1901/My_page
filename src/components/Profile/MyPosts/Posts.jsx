import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';

let postData = [
    {id: 1, message: "My first post", count: 10},
    {id: 2, message: "My second post", count: 8}
] 

let post = postData.map(p => <Post message = {p.message} count = {p.count} />);

const Posts= () => {
    return  <div className={classes.posts}> 
                    <div className={classes.myPosts}>
                    <div>My posts</div>
                    <div><textarea></textarea></div>
                    <div><button>Add post</button></div>    
                    </div> 
                    {post}
            </div>
            
}

export default Posts;