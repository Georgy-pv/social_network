import { headerAPI } from "../API/api";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    authInfo: {
      id: null,
      login: null,
      email: null
    },
    isFetching: false,
    isAuth: false
  }

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                authInfo: {...action.data},
                isAuth: true
            };
        
        default:
            return state;
    };
};

export const setAuthUserData = (data) => ({
    type: SET_USER_DATA,
    data: data
});



//=========================THUNK===========================

export const authMeThunk = () => {
    return (dispatch) => {
        headerAPI.authMe().then(data => {
            if(data.resultCode === 0){
                dispatch(setAuthUserData(data.data));
            };
        });
    };
};

export default authReducer;