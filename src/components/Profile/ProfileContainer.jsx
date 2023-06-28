import React from 'react';
import s from './ProfileStyle.module.css'
import Profile from './Profile';
import axios from 'axios';
import { setUserProfile } from '../redux/profile-reducer';
import { connect } from 'react-redux';


class ProfileContainer extends React.Component {

    componentDidMount () {
        const baseURL = 'https://social-network.samuraijs.com/api/1.0/';
        axios.get(`${baseURL}profile/3`).then(response => {
            this.props.setUserProfile(response.data);
        });
    }
    render() {
        return (
            <div className="main">
                <Profile {...this.props} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userProfile: state.profilePage.userProfile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);