import { mockStore } from "../setupTests";
import {
  GET_USER_PAYLOAD_FAILURE,
  GET_USER_PAYLOAD_REQUEST,
  GET_USER_PAYLOAD_SUCCESS,
  getUserPayload,
  getUserPayloadRequest,
  getUserPayloadSuccess
} from "../actions/index";
import store from "../store";

describe("Get Data", () => {
  const action = getUserPayloadRequest();
  test("REQUEST", () => {
    expect(action.type).toEqual(GET_USER_PAYLOAD_REQUEST);
  });
});
