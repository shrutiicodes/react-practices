import React from "react";
import Input from "./Pages/Input";
import { fireEvent, render } from "@testing-library/react";

test("Selecting Checkbox", () => {
	const { getByLabelText } = render(<Input />);
	const check = getByLabelText(/Not Checked/);
	fireEvent.click(check);
	expect(check.checked).toEqual(true);
});
