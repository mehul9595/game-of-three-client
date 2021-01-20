import App from "./App";
import { shallow } from "enzyme";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import SinglePlayer from './containers/SinglePlayer';
import Multiplayer from './containers/Multiplayer';

let pathMap = {};
describe("AppComponent", () => {
  const wrapper = shallow(<App />);
  
  beforeAll(() => {
    pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });

  test("should contain 4 routes", () => {
    
    expect(wrapper.find(Route)).toHaveLength(4);
    
  });

  it("should show MainScreen component", () => {
    expect(pathMap["/"]).toBe(Home);
  });

  it("should show SinglePlayer component", () => {
    expect(pathMap["/singleplayer"]).toBe(SinglePlayer);
  });

  it("should show MultiPlayer component", () => {
    expect(pathMap["/multiplayer"]).toBe(Multiplayer);
  });

  it("should show page not found case", () => {
    expect(pathMap[undefined]()).toMatchObject(<div>Page not found...</div>);
  });
});
