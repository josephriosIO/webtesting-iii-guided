import React from "react";
import renderer from "react-test-renderer"; // 1: install this npm module as a dev dependency

import App from "./App";

describe("<App />", () => {
  // 2. write this test
  it("matches snapshot", () => {
    const tree = renderer.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
