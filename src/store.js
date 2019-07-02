import { createStore, combineReducers, applyMiddleware } from "redux";
import { userDataReducer } from "./reducers/index";
import Thunk from "redux-thunk";

const rootReducer = combineReducers({
  users: userDataReducer
});

const store = createStore(rootReducer, applyMiddleware(Thunk)); 

export default store;