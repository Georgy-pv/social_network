import React from 'react';
import Sidebar from './Sidebar';
import StoreContext from '../../context';

function SidebarContainer(props) {
    

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().sidebar;
                    return <Sidebar state={state} />
                }
            }
        </StoreContext.Consumer>
        
    );
}

export default SidebarContainer;