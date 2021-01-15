import React from "react";
import renderer from 'react-test-renderer'
import { render } from "@testing-library/react";
import { Row, Col } from 'antd';
import Home from "./index";

describe("HomeComponent", () => {
//   it("should match the header", () => {
//     const { getByRole } = render(<Home />);
//     expect(getByRole("heading")).toBeInTheDocument();
//     expect(getByRole("heading")).toHaveTextContent("Game of Three @ Scoober");
//   });

  it("should render sucessfully with snapshot", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
