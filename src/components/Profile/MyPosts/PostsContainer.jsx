import React from 'react';
import {addPostCreator, onChangePostCreator} from '../../../redux/ProfileReducer';
import Posts from './Posts';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        ProfilePage: state.ProfilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        onChangePost: (text) => {
            dispatch(onChangePostCreator(text));
        }
    }
}

const PostsContainer = connect (mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;