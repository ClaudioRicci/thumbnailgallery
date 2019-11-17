import React from "react";
import ReactDOM from "react-dom";
import SearchIcon from "../SearchIcon";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchIcon></SearchIcon>, div);
});

it("Matches snapshot", () => {
  const tree = renderer.create(<SearchIcon></SearchIcon>).toJSON();
  expect(tree).toMatchSnapshot();
});
