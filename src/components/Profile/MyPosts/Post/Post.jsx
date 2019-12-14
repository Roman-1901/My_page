import React from 'react';
import classes from './Post.module.css';

const Post= (props) => {
    return  <div className={classes.item}>
                        <img src = {props.image} />
                        <div className={classes.postText}>
                            {props.message}
                        </div>
            </div>        
}

export default Post;