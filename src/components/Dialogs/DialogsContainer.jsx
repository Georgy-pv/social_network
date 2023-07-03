import React from 'react';
import { sendMessage, updateNewMessageChange } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


function mapStateToProps(state) {
    return{
        dialogsPage: state.dialogsPage
    }
};



export default compose(
    connect(mapStateToProps, {updateNewMessageChange,sendMessage}),
    withAuthRedirect
)(Dialogs);