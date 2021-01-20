import React from "react";
import { render } from "@testing-library/react";
import renderer from 'react-test-renderer';

// import "@testing-library/jest-dom";
import ActionButton from "./index";

describe("ActionButton Component", () => {
  test("should contain 3 action buttons", () => {
    const { getAllByRole } = render(<ActionButton />);

    expect(getAllByRole("button")).toBeTruthy();
    expect(getAllByRole("button").length).toBe(3);
  });

  test("should contain +1 action", () => {
    const { getByText } = render(<ActionButton />);
    
    expect(getByText("+1")).toHaveTextContent("+1");
  });

  test("should match the snapshot sucessfully", () => {
    const tree = renderer.create(<ActionButton />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
