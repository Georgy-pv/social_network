import React from 'react';
import { addPostActionCreator, updateNewPostChangeActionCreator } from '../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// function MyPostsContainer(props) {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let addPost = () => {
//                         let action = addPostActionCreator();
//                         store.dispatch(action);
//                     };
                
//                     let onPostChange = (text) => {
//                         let action = updateNewPostChangeActionCreator(text);
//                         store.dispatch(action);
//                     };
//                     let postsData = store.getState().profilePage.postsData;
//                     let newPostText = store.getState().profilePage.newPostText;
                    
                    
//                     return <MyPosts onPostChange={onPostChange} addPost={addPost} newPostText={newPostText} postsData={postsData} />
//                 }
//             }
//         </StoreContext.Consumer>

//     );
// }

function mapStateToProps(state) {
    return{
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData
    }
};
function mapDispatchToProps(dispatch) {
    return{
        onPostChange: (text) => {
            dispatch(updateNewPostChangeActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;