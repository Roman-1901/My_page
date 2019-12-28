import React from 'react';
import classes from './Posts.module.css';
import Post from './Post/Post';
import {addPostCreator, onChangePostCreator} from '../../../redux/state';


const Posts= (props) => {
    
    let post = props.postData.map(p => <Post message = {p.message} count = {p.count} ava = {props.profileAvatar}/>);


    

    let addPost = () => {
        props.dispatch(addPostCreator());
    }

    let newPostElement = React.createRef();
    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.dispatch(onChangePostCreator(text));
    }

    return  <div className={classes.posts}> 
                    <div className={classes.myPosts}>
                    <div>My posts</div>
                    <div><textarea onChange = {onChangePost} ref = {newPostElement} value ={props.newPostText}/></div>
                    <div><button onClick = {addPost}>Add post</button></div>    
                    </div> 
                    {post}
            </div>
            
}

export default Posts;