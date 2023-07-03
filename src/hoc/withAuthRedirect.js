import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';

export const withAuthRedirect = (Component) => {

    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'} />;
            return <Component {...this.props}/>;
        };
    };
    function mapStateToPropsRedirect(state) {
        return {
            isAuth: state.auth.isAuth
        }
    };

    return connect(mapStateToPropsRedirect)(RedirectComponent);
};