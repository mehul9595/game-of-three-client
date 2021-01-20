import React from "react";
import renderer from 'react-test-renderer';
import {  cleanup } from "@testing-library/react";
import { shallow } from "enzyme";
import Home from "./index";

describe("HomeComponent", () => {
  afterEach(cleanup);
  const wrapper = shallow(<Home />);
  //const instance = wrapper.instance();
  const gameName = "Game of Three @ Scoober";

  it("should match the header", () => {
    // const root = renderer.create(<Home />).root;
    // const element = root.findByType("div");
    // expect(element.props.className.includes("game-home")).toBe(true);    
    expect(wrapper.find("h1").contains(gameName)).toBe(true);
  });

  it("should contain 2 buttons", () => {
    expect(wrapper.find("Button")).toHaveLength(2);
  });

  test('should contain Singleplayer button', () => {
    expect(wrapper.find("Button").contains("Single Player")).toBe(true);

  });

  test('should contain multiplayer button', () => {
    expect(wrapper.find({ 'data-testId': 'multiplayerBtn' })).toHaveLength(1);
  });
  
  

  it("should render sucessfully with snapshot", () => {
    
     const tree = renderer.create(wrapper).toJSON();
    // const tree = render(<Home />).container;
    expect(tree).toMatchSnapshot();
  });
});
