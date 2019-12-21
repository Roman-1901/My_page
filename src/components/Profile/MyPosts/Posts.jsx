import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';


const Posts= (props) => {
    
    let post = props.postData.map(p => <Post message = {p.message} count = {p.count} ava = {props.profileAvatar}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return  <div className={classes.posts}> 
                    <div className={classes.myPosts}>
                    <div>My posts</div>
                    <div><textarea ref = {newPostElement}></textarea></div>
                    <div><button onClick = {addPost}>Add post</button></div>    
                    </div> 
                    {post}
            </div>
            
}

export default Posts;