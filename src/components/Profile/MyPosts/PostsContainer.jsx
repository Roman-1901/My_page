import React from 'react';
import {addPostCreator, onChangePostCreator} from '../../../redux/ProfileReducer';
import Posts from './Posts';


const PostsContainer= (props) => {

    let ProfilePage = props.store.getState().ProfilePage;

    let addPost = () => {
        props.store.dispatch(addPostCreator());
    }


    let onChangePost = (text) => {
        props.store.dispatch(onChangePostCreator(text));
    }

    return  <Posts addPost = {addPost} onChangePost = {onChangePost} ProfilePage = {ProfilePage}/>
}

export default PostsContainer;