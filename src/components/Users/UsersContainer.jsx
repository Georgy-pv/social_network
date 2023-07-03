import React from 'react';
import s from './Users.module.css'
import {
    setTotalCount,
    followThunk,
    setCurrentPage,
    unfollowThunk,
    toggleDisabledButton,
    getUsers
} from '../../redux/users-reducer';
import { connect } from 'react-redux';
import UserItem from './User/UserItem';
import Preloader from '../common/Preloader/Preloader';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        this.props.setCurrentPage(pageNumber);
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'} />;

        let usersItems = this.props.users.map(u => {
            return <UserItem key={u.id} userId={u.id} followed={u.followed} avatar={u.photos.large} fullName={u.name}
                userStatus={u.status} unfollowing={this.props.unfollowThunk} following={this.props.followThunk} 
                toggleDisabledButton={this.props.toggleDisabledButton} disabledButton = {this.props.disabledButton} />
        });

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };

        return (
            <div className="users">
                {this.props.isFetching
                    ? <Preloader />
                    : ''}
                <div className="paginator">
                    {pages.map(p => {
                        return <span key={p} onClick={(e) => this.onPageChanged(p)} className={`${s.page} ${this.props.currentPage === p ? s.selectedPage : ''}`}>{p}</span>
                    })}
                </div>
                {usersItems}
            </div>

        );
    }
}

function mapStateToPropsRedirect(state) {
    return {
        isAuth: state.auth.isAuth
    }
};





function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        disabledButton: state.usersPage.disabledButton
    }
};

export default compose(
    connect(mapStateToProps, {
        followThunk, unfollowThunk, getUsers,
        setCurrentPage, setTotalCount, toggleDisabledButton
    }),
    withAuthRedirect
)(UsersContainer);