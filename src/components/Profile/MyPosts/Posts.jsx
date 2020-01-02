import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';


const Posts= (props) => {
    let state = props.ProfilePage;

    let post = state.postData.map(p => <Post message = {p.message} count = {p.count} ava = {state.profileAvatar}/>);


    

    let addPost = () => {
        props.addPost();
    }


    let onChangePost = (e) => {
        let text = e.target.value;
        props.onChangePost(text);
    }

    return  <div className={classes.posts}> 
                    <div className={classes.myPosts}>
                    <div>My posts</div>
                    <div><textarea onChange = {onChangePost} value ={state.newPostText}/></div>
                    <div><button onClick = {addPost}>Add post</button></div>    
                    </div> 
                    {post}
            </div>
            
}

export default Posts;