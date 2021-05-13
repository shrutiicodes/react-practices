import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders", () => {
	const { getByText } = render(<App />);
	const h1 = getByText(/Hello world!/);
	expect(h1).toHaveTextContent("Hello world!");
});
