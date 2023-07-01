import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';



function mapStateToProps(state) {
    return{
        state: state.sidebar
    }
};
function mapDispatchToProps(dispatch) {
    return{
        
    }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar)

export default SidebarContainer;