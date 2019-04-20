// we'll need axios
import axios from 'axios';
// one for fetching, one for success and one for failure
// we'll need to create 3 different action types here.
export const FETCH_API_START = "FETCH_API_START";
export const FETCH_API_SUCCESS = "FETCH_API_SUCCESS";
export const FETCH_API_FAILURE = "FETCH_API_FAILURE";


// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export const getAPI = () => {
    return dispatch => {
        // we are dispatching a start action here
        dispatch({ type: FETCH_API_START });
        // Making API Call
        axios.get("https://swapi.co/api/people/")
        .then(res => {
            dispatch({
                type: FETCH_API_SUCCESS,
                payload: res.data.results
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_API_FAILURE,
                payload: err
            })
        });
    };
};
