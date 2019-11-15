import React from "react";
import ReactDOM from "react-dom";
import Card from "../Card";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Card></Card>, div);
});

test("Renders Card Correctly", done => {
  const { getByTestId } = render(<Card />);
  expect(getByTestId("card")).toHaveTextContent("Image Source");
  done();
});

it("Matches snapshot", () => {
  const tree = renderer.create(<Card></Card>).toJSON();
  expect(tree).toMatchSnapshot();
});
