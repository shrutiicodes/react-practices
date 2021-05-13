import React, { useState, useEffect } from "react";

function State() {
	const [thing, setThing] = useState("coding");
	const [anotherThing, setAnotherThing] = useState("Laptop");

	useEffect(() => {
		console.log(`She loves ${thing}`);
	}, []);

	useEffect(() => {
		console.log(`She loves ${anotherThing}`);
	}, []);

	return (
		<>
			<h1>
				I love {thing} and {anotherThing}
			</h1>
			<button onClick={() => setThing("coding")}>Change to Coding</button>
			<button onClick={() => setAnotherThing("laptop")}>
				Change to Laptop
			</button>

			<button onClick={() => setThing("coffee")}>Coffee</button>
			<button onClick={() => setThing("books")}>Books</button>
		</>
	);
}

export default State;
