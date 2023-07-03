import React from 'react';
import s from './ProfileStyle.module.css'
import Profile from './Profile';
import { setProfileThunk } from '../../redux/profile-reducer';
import { connect } from 'react-redux';
import withRouter from 'react-router-dom/withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount () {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        };
        this.props.setProfileThunk(userId)
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
        userProfile: state.profilePage.userProfile,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {setProfileThunk}),
    withRouter,
    withAuthRedirect

)(ProfileContainer)

