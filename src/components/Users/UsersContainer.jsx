import React from 'react';
import s from './Users.module.css'
import { setTotalCountActionCreator, followActionCreator, setCurrentPageActionCreator, setUsersActionCreator, unfollowActionCreator } from '../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';


function mapStateToProps(state) {
    return{
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
};
function mapDispatchToProps(dispatch) {
    return{
        following: (userid) => {
            dispatch(followActionCreator(userid))
        },
        unfollowing: (userid) => {
            dispatch(unfollowActionCreator(userid))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage) =>{
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountActionCreator(totalCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;