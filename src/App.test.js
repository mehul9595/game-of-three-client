import { render, screen } from "@testing-library/react";
import App from "./App";

test("should render with snapshot correctly", () => {
  const container = render(<App />).container;
  
  expect(container.firstChild.className).toBe("App");
  
});
