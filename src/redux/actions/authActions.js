import API from "../../utils/api";
import { LOGIN_SUCCESS, LOGIN_FAIL } from "../constants/authConstants";

// Login Action
export const login = (email, password) => async (dispatch) => {
    try {
        const { data } = await API.post("accounts/login/", { email, password });

        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);

        dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response?.data?.error || "Login failed",
        });
    }
};

// Check Authentication Status
export const checkAuth = () => async (dispatch) => {
    try {
        const token = localStorage.getItem("access_token");

        if (!token) throw new Error("No token found");

        const { data } = await API.get("accounts/check-auth/", {
            headers: { Authorization: `Bearer ${token}` },
        });

        dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response?.data?.error || "Authentication check failed",
        });

        // Clear tokens if auth check fails
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
    }
};
