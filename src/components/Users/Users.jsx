import React from 'react';
import s from './Users.module.css'
import UserItem from './User/UserItem';
import axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
        axios.get(`${baseURL}users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
        axios.get(`${baseURL}users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        let usersItems = this.props.users.map(u => {
            return <UserItem key={u.id} userId={u.id} followed={u.followed} avatar={u.photos.large} fullName={u.name}
                userStatus={u.status} unfollowing={this.props.unfollowing} following={this.props.following} />
        });

        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
        let pages = []
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        };
        return (
            <div className="users">
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


export default Users;