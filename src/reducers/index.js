import * as actions from "../actions";
const initialState = {
  users: []
}

export const userDataReducer = (state = initialState, action) => {
  switch(action.type){
    case "GET_USER_PAYLOAD_SUCCESS":
    return {...state, users: action.data};

    default:
    return state;
  }
}