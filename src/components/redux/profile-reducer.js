const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_CHANGE = 'UPDATE-NEW-POST-CHANGE';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    userProfile: null,
    postsData: [
        { id: 1, post: 'Мой первый пост!', likesCount: 12 },
        { id: 2, post: 'Это пропс!', likesCount: 15 },
        { id: 4, post: 'Hey', likesCount: 24 },
        { id: 5, post: 'Post 4', likesCount: 52 },
        { id: 6, post: 'Post 5', likesCount: 45 },
        { id: 7, post: 'Post 6', likesCount: 64 }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST:
            let newPost = {
                id: state.postsData[state.postsData.length - 1].id + 1,
                post: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [
                    ...state.postsData,
                    newPost
                ],
                newPostText: ''
            };
        case UPDATE_NEW_POST_CHANGE:
            return {
                ...state,
                newPostText: action.postText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            };
        default:
            return state;
    };
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostChangeActionCreator = (postText) => ({
    type: UPDATE_NEW_POST_CHANGE,
    postText: postText
});
export const setUserProfile = (userProfile) => ({
    type: SET_USER_PROFILE,
    userProfile: userProfile
});

export default profileReducer;