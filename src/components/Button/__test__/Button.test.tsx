import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button></Button>, div);
});

test("Renders Button Correctly", done => {
  const { getByTestId } = render(<Button label="Close" />);
  expect(getByTestId("button")).toHaveTextContent("Close");
  done();
});

it("Matches snapshot", () => {
  const tree = renderer.create(<Button label="Close"></Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
