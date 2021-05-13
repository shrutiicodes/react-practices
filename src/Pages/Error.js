import React from "react";
import { useLocation } from "react-router-dom";

function Error() {
	let location = useLocation();
	return <h1>Resources not found at {location.pathname}</h1>;
}

export default Error;
