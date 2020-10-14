import axios from "axios";
import { setAlert } from "./alert";
import * as actions from "./types";

// Get current user's profile
export const getCurrentProfile = () => async dispatch => {
    try {
        const res = await axios.get("/api/profile/me");

        dispatch({
            type: actions.GET_PROFILE,
            payload: res.data
        })
    }
    catch (err) {
        dispatch({
            type: actions.PROFILE_ERROR,
            payload: { msg: err.response.statusText, stauts: err.response.status }
        })
    }
}