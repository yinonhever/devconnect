import * as actions from "../actions/types";

const initialState = [];

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case actions.SET_ALERT:
            const updatedState = state.filter(alert => alert.msg !== payload.msg);
            updatedState.push(payload);
            return updatedState;
        case actions.REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
}