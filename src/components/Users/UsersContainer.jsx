import React from 'react';
import s from './Users.module.css'
import { setTotalCount, follow, setCurrentPage, setUsers, unfollow, toggleIsFetching } from '../redux/users-reducer';
import { connect } from 'react-redux';
import UserItem from './User/UserItem';
import axios from 'axios';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
        axios.get(`${baseURL}users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
            this.props.toggleIsFetching(false);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
        axios.get(`${baseURL}users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.toggleIsFetching(false);
        });
    }

    render() {
        let usersItems = this.props.users.map(u => {
            return <UserItem key={u.id} userId={u.id} followed={u.followed} avatar={u.photos.large} fullName={u.name}
                userStatus={u.status} unfollowing={this.props.unfollow} following={this.props.follow} />
        });

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = []
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        };
        return (
            <div className="users">
                {this.props.isFetching 
                ? <Preloader /> 
                : ''}
                <div className="paginator">
                    {pages.map(p => {
                        return <span onClick={(e) => this.onPageChanged(p) } className={`${s.page} ${this.props.currentPage === p ? s.selectedPage : ''}`}>{p}</span>
                    })}
                </div>
                {usersItems}
            </div>
    
        );
    }
}

function mapStateToProps(state) {
    return{
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};
// function mapDispatchToProps(dispatch) {
//     return{
//         following: (userid) => {
//             dispatch(followActionCreator(userid))
//         },
//         unfollowing: (userid) => {
//             dispatch(unfollowActionCreator(userid))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (currentPage) =>{
//             dispatch(setCurrentPageActionCreator(currentPage))
//         },
//         setTotalCount: (totalCount) => {
//             dispatch(setTotalCountActionCreator(totalCount))
//         },
//         toggleIsFetching: (isFetching) =>{
//             dispatch(toggleIsFetchingActionCreator(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching 
})(UsersContainer)