import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo= () => {
    return  <div>
                <div>
                    <img src='https://s1.1zoom.me/big0/994/260356-svetik.jpg'></img>
                </div>
                <div className={classes.ava}>
                    ava + description
                </div>
            </div>    
}

export default ProfileInfo;