import React from "react";

function Regular() {
	return <h1>Please Log in</h1>;
}

function Secret() {
	return <h1>Welcome</h1>;
}

function Authorize({ authorized }) {
	return <>{authorized ? <Secret /> : <Regular />}</>;
}

export default Authorize;
