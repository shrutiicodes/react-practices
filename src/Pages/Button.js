import React from "react";

function Button() {
	function handleSubmit(e) {
		e.preventDefault();
		alert("Clicked");
	}

	return (
		<form onSubmit={handleSubmit}>
			<button type="submit" onClick={() => console.log("Clicked!")}>
				Say Clicked!!
			</button>
		</form>
	);
}

export default Button;
