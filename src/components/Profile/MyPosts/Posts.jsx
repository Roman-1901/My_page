import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';
import {addPostCreator, onChangePostCreator} from '../../../redux/ProfileReducer';


const Posts= (props) => {
    
    let post = props.postData.map(p => <Post message = {p.message} count = {p.count} ava = {props.profileAvatar}/>);


    

    let addPost = () => {
        props.dispatch(addPostCreator());
    }


    let onChangePost = (e) => {
        let text = e.target.value;
        props.dispatch(onChangePostCreator(text));
    }

    return  <div className={classes.posts}> 
                    <div className={classes.myPosts}>
                    <div>My posts</div>
                    <div><textarea onChange = {onChangePost} value ={props.newPostText}/></div>
                    <div><button onClick = {addPost}>Add post</button></div>    
                    </div> 
                    {post}
            </div>
            
}

export default Posts;