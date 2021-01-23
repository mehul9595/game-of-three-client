import React from "react";
import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import Home from "./index";

describe("HomeComponent", () => {
  afterEach(cleanup);
  const wrapper = shallow(<Home />);
  const gameName = "Game of Three @ Scoober";

  it("should match the header", () => {
    expect(wrapper.find("h1").contains(gameName)).toBe(true);
  });

  it("should contain 3 buttons", () => {
    expect(wrapper.find("Button")).toHaveLength(3);
  });

  test("should contain Singleplayer button", () => {
    expect(wrapper.find("Button").contains("Single Player")).toBe(true);
  });

  test("should contain multiplayer button", () => {
    expect(wrapper.find({ "data-testid": "multiplayerBtn" })).toHaveLength(1);
  });

  it("should render sucessfully with snapshot", () => {
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
