const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';

const profileReducer = (state, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: state.postsData[state.postsData.length - 1].id + 1,
                post: state.newPostText,
                likesCount: 0
            };
            state.postsData.push(newPost);
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_CHANGE:
            state.newPostText = action.postText;
            return state
        default:
            return state
    };
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostChangeActionCreator = (postText) => ({
    type: UPDATE_NEW_POST_CHANGE,
    postText: postText
});

export default profileReducer;