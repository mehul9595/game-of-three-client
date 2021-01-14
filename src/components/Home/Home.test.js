import React from "react";
import { render } from "@testing-library/react";
import Home from './index';

describe("HomeComponent", () => {
    
    it("should match the header", ()=> {
        const { getByRole } = render(<Home />)
        expect(getByRole("heading")).toBeInTheDocument();
        expect(getByRole("heading")).toHaveTextContent("Game of Three");
        
    });

    it("should render sucessfully with snapshot", ()=> {
        const { container }   = render(<Home />);
        expect(container.firstChild).toMatchSnapshot();        
    });
    
});
