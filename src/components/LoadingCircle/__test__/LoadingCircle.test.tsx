import React from "react";
import ReactDOM from "react-dom";
import LoadingCircle from "../LoadingCircle";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LoadingCircle></LoadingCircle>, div);
});

test("Renders LoadingCircle Correctly", done => {
  const { getByTestId } = render(<LoadingCircle />);
  expect(getByTestId("loadingCircle")).toHaveTextContent("Loading...");
  done();
});

it("Matches snapshot", () => {
  const tree = renderer.create(<LoadingCircle></LoadingCircle>).toJSON();
  expect(tree).toMatchSnapshot();
});
