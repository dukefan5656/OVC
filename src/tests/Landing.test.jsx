import React from "react";
import { shallow, mount } from "enzyme";
import { Landing } from "../components/Landing";
import { Provider } from "react-redux";

import store from "../store";

const createGetUserPayload = () => {
  const gu = jest.fn();
  gu.mockReturnValue(new Promise(resolve => resolve()));
  return gu;
};


describe("Landing", () => {
  it("should render without errors", () => {
    shallow(
      <Provider store={store}>
        <Landing />
      </Provider>
    );
  });
  it("calls getUserPayload", () => {
    const getUserPayload = createGetUserPayload();
    shallow(<Landing getUserPayload={getUserPayload} />);
    expect(getUserPayload).toBeCalled();
  });
  });

