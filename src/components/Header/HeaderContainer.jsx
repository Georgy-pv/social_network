import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authMeThunk } from '../../redux/auth-redicer';


class HeaderContainer extends React.Component {

    componentDidMount(){
       this.props.authMeThunk();
    };

    render(){
        return(
            <Header {...this.props} />
        );
    };
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.authInfo.login
    }
};

export default connect(mapStateToProps, {authMeThunk})(HeaderContainer);