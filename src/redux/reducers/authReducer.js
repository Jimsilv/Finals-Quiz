import { LOGIN_SUCCESS, LOGIN_FAIL, CHECK_AUTH, LOGOUT } from "../constants/authConstants";

const initialState = {
    userInfo: null,
    loading: true,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_AUTH:
            return { ...state, userInfo: action.payload, loading: false };
        case LOGIN_SUCCESS:
            return { ...state, userInfo: action.payload, loading: false };
        case LOGIN_FAIL:
        case LOGOUT:
            return { ...state, userInfo: null, loading: false };
        default:
            return state;
    }
};
