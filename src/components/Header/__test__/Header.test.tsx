import React from "react";
import ReactDOM from "react-dom";
import Header from "../Header";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header></Header>, div);
});

test("Renders Header Correctly", done => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId("header")).toHaveTextContent("Thumbnail Gallery");
  done();
});

it("Matches snapshot", () => {
  const tree = renderer.create(<Header></Header>).toJSON();
  expect(tree).toMatchSnapshot();
});
