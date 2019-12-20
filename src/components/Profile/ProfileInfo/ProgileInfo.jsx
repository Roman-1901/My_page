import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo= (props) => {
    return  <div>
                <div>
                    <img src={props.profileInfo}></img>
                </div>
                <div className={classes.ava}>
                    ava + description
                </div>
            </div>    
}

export default ProfileInfo;