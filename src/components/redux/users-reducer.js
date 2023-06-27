const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';

let initialState = {
    users: [],
    totalCount: 50,
    pageSize: 10,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: true };
                    };
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: false };
                    };
                    return u;
                })
            };
        case SETUSERS:
            return {
                ...state, 
                users: [...action.users]
            };
        case SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_COUNT:
            return{
                ...state,
                totalCount: action.totalCount
            }
        default:
            return state;
    };
};

export const followActionCreator = (userid) => ({
    type: FOLLOW,
    userid: userid
});
export const unfollowActionCreator = (userid) => ({
    type: UNFOLLOW,
    userid: userid
});
export const setUsersActionCreator = (users) => ({
    type: SETUSERS,
    users: users
});
export const setCurrentPageActionCreator = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
});
export const setTotalCountActionCreator = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount: totalCount
});

export default usersReducer;