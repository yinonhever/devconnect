import { v4 as uuidv4 } from "uuid";
import * as actions from "./types";

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
    const id = uuidv4();
    dispatch({
        type: actions.SET_ALERT,
        payload: { msg, alertType, id }
    });

    setTimeout(() => dispatch({
        type: actions.REMOVE_ALERT,
        payload: id
    }), timeout);
}