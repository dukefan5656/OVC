import thunk from "redux-thunk";
import axios from "axios";
const API_BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const GET_USER_PAYLOAD_REQUEST = "GET_USER_PAYLOAD_REQUEST";
export const getUserPayloadRequest = () => ({
  type: GET_USER_PAYLOAD_REQUEST
});

export const GET_USER_PAYLOAD_SUCCESS = "GET_USER_PAYLOAD_SUCCESS";
export const getUserPayloadSuccess = data => ({
  type: GET_USER_PAYLOAD_SUCCESS,
  data
});

export const GET_USER_PAYLOAD_FAILURE = "GET_USER_PAYLOAD_FAILURE";
export const getUserPayloadFailure = error => ({
  type: GET_USER_PAYLOAD_FAILURE,
  error
});

export const getUserPayload = () => dispatch => {
  dispatch({ type: GET_USER_PAYLOAD_REQUEST });
  return axios.get(API_BASE_URL)
    .then(res => {  
      if (res) {
        return res.data;
      }
      return res.data.then(json => {
        throw Error("API: " + JSON.stringify(json));
      });

    })
    .then(users => dispatch(getUserPayloadSuccess(users)))
    .catch(error => dispatch(getUserPayloadFailure(error)));
};
