import React from 'react';
import classes from './Post.module.css';





const Post= (props) => {
    return  <div className={classes.item}>
                        <img src = {props.ava} />
                        <div className={classes.postText}>
                            {props.message}
                            <div className={classes.likes}>
                            <div className={classes.likesItem}>likes&nbsp;</div> {props.count}
                            </div>
                        </div>  
            </div>        
}

export default Post;