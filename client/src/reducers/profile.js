import * as actions from "../actions/types";

const initialState = {
    profile: null,
    profiles: [],
    repos: [],
    loading: true,
    error: {}
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            };
        case actions.PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}