import React from 'react';
import Sidebar from './Sidebar';
import { connect } from 'react-redux';

// function SidebarContainer(props) {
    

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().sidebar;
//                     return <Sidebar state={state} />
//                 }
//             }
//         </StoreContext.Consumer>
        
//     );
// }

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