import React from 'react';
import classes from './Post.module.css';




const Post= (props) => {
    return  <div className={classes.item}>
                        <img src = "https://smartprogress.do/uploadImages/001018254.jpg" />
                        <div className={classes.postText}>
                            {props.message}
                            <div className={classes.likes}>
                            <div className={classes.likesItem}>likes&nbsp;</div> {props.count}
                            </div>
                        </div>  
            </div>        
}

export default Post;