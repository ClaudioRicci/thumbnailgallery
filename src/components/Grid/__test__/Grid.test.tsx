import React from "react";
import ReactDOM from "react-dom";
import Grid from "../Grid";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Grid></Grid>, div);
});

test("Renders Grid Correctly", done => {
  const { getByTestId } = render(<Grid />);
  expect(getByTestId("grid")).toBeInTheDocument();
  done();
});

it("Matches snapshot", () => {
  const tree = renderer.create(<Grid></Grid>).toJSON();
  expect(tree).toMatchSnapshot();
});
