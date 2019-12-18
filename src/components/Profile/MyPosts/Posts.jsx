import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';


const Posts= (props) => {
    
    let post = props.postData.map(p => <Post message = {p.message} count = {p.count} />);

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