import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Header from "./index";

describe("HeaderComponent", () => {
  afterEach(cleanup);
  test("should contain header", () => {
    const {getByRole} = render(<Header />);
    expect(getByRole("banner").className).toBe("App-header");
  });

  test("should contain logo image", () => {
    const { getByRole } = render(<Header />);

    expect(getByRole("img").attributes.getNamedItem("src").value).toBe("logo.svg");
  });

  test('should match the 1st line Title', () => {
    const { getByText } = render(<Header />);

    expect(getByText("Scoober - Takeaway.com")).toBeInTheDocument();
    expect(getByText("Scoober - Takeaway.com")).toHaveTextContent("Scoober - Takeaway.com");

  });

  test('should match the subtitle', () => {
    const { getByText } = render(<Header />);

    expect(getByText("Win the game or win the job")).toBeInTheDocument();
    expect(getByText("Win the game or win the job")).toHaveTextContent("Win the game or win the job");
  })
  
  

  test("should match the snapshot sucessfully", () => {
    const tree = render(<Header />);

    expect(tree.container.firstChild).toMatchSnapshot();
  });
});
