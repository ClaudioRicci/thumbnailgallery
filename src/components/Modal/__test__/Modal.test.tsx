import React from "react";
import ReactDOM from "react-dom";
import Modal from "../Modal";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup);

it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Modal></Modal>, div);
});

test("Renders Modal Correctly", done => {
  const { getByTestId } = render(<Modal />);
  expect(getByTestId("modal")).toHaveTextContent("Close");
  done();
});

it("Matches snapshot", () => {
  const tree = renderer.create(<Modal></Modal>).toJSON();
  expect(tree).toMatchSnapshot();
});
