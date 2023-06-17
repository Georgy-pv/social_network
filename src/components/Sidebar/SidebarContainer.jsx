import React from 'react';
import Sidebar from './Sidebar';

function SidebarContainer(props) {
    let state = props.store.getState().sidebar

    return <Sidebar state={state} />;
}

export default SidebarContainer;