import {FETCH_API_START, FETCH_API_SUCCESS, FETCH_API_FAILURE} from "../actions";
const initialState = {
    characters: [],
    error: null,
    isFetching: false
    // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
    switch (action.type) {
            // Fill me in with the important reducers action types should be FETCHING,
            // SUCCESS and FAILURE your switch statement should handle all of these cases.
        case FETCH_API_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_API_SUCCESS:
            return {
                ...state,
                isFetching: false,
                characters: [...state.characters, ...action.payload]
            };
        case FETCH_API_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state;
    }
};
