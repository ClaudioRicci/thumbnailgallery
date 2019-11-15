import React from "react";
import ReactDOM from "react-dom";
import Frame from "../Frame";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Frame></Frame>, div);
});

test("Renders Frame Correctly", done => {
  const { getByTestId } = render(<Frame />);
  expect(getByTestId("frame")).toHaveTextContent("");
  done();
});

it("Matches snapshot", () => {
  const tree = renderer.create(<Frame></Frame>).toJSON();
  expect(tree).toMatchSnapshot();
});
