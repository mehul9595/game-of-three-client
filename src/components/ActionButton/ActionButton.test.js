import React from "react";
import { screen, render, logDOM } from "@testing-library/react";
import ActionButton from "./index";

describe("ActionButton Component", () => {
  test("should contain 3 action buttons", () => {
    const { getAllByRole } = render(<ActionButton />);

    expect(getAllByRole("button")).toBeTruthy();
    expect(getAllByRole("button").length).toBe(3);
  });

  test("should contain +1 action", () => {
    const { getByText } = render(<ActionButton />);
    logDOM(screen.getByText("+1"));
    expect(getByText("+1")).toHaveTextContent("+1");
  });

  test("should match the snapshot sucessfully", () => {
    const { container } = render(<ActionButton />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
