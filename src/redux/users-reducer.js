import { usersAPI } from "../API/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const DISABLED_BUTTON = 'DISABLED-BUTTON';

let initialState = {
    users: [],
    totalCount: 50,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    disabledButton: []
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
        case TOGGLE_IS_FETCHING:
            return{
                ...state,
                isFetching: action.isFetching
            }
        case DISABLED_BUTTON:
            return{
                ...state,
                disabledButton: action.isDisabled 
                ? [...state.disabledButton, action.userId]
                : state.disabledButton.filter(id => id !== action.userId)
            }
        default:
            return state;
    };
};

export const follow = (userid) => ({
    type: FOLLOW,
    userid: userid
});
export const unfollow = (userid) => ({
    type: UNFOLLOW,
    userid: userid
});
export const setUsers = (users) => ({
    type: SETUSERS,
    users: users
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
});
export const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    totalCount: totalCount
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
});
export const toggleDisabledButton = (isDisabled, userId) => { 
    return{
    type: DISABLED_BUTTON,
    isDisabled: isDisabled,
    userId: userId
}};


// =============THUNK=======================

export const getUsers = (currentPage, pageSize) => {

    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
            dispatch(toggleIsFetching(false));
        });
    }
}

export const followThunk = (userId) => {
    return (dispatch) =>{
        dispatch(toggleDisabledButton(true, userId));
        usersAPI.follow(userId).then(data => {
            if(data.resultCode === 0){
                dispatch(follow(userId));
            };
            dispatch(toggleDisabledButton(false, userId));
        });
    }
}

export const unfollowThunk = (userId) => {
    return (dispatch) =>{
        dispatch(toggleDisabledButton(true, userId));
        usersAPI.unfollow(userId).then(data => {
            if(data.resultCode === 0){
                dispatch(follow(userId));
            };
            dispatch(toggleDisabledButton(false, userId));
        });
    }
}

export default usersReducer;