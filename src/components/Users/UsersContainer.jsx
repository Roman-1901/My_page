import React from 'react';
import {connect} from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../redux/UsersReducer';
import Users from './Users';


let mapStateToProps = (state) => {
    return {
        users: state.UsersPage.users
        }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId)=> {
            dispatch(followAC(userId));
        },
        unfollow: (userId)=> {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users)=> {
            dispatch(setUsersAC(users));
        },
    }
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;