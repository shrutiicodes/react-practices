import React, { useState, useEffect, useRef, useReducer } from "react";
import "./App.css";
import landing from "./img/landing.jpg";

function Header(props) {
	return (
		<header>
			<h1>{props.name}</h1>
		</header>
	);
}

function Main(props) {
	return (
		<header>
			<h2>This is our {props.type} project</h2>
			<img src={landing} height={200} />
			<ul style={{ textAlign: "left" }}>
				{props.items.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
		</header>
	);
}

function Footer(props) {
	return (
		<header>
			<h3>All Rights Reserved Project Name &copy; {props.year}</h3>
		</header>
	);
}

// function Button() {
// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<button type="submit" onClick={() => console.log("Clicked!")}>
// 				Say Clicked!!
// 			</button>
// 		</form>
// 	);
// }

const [firstItem, ,] = ["lamp", "laptop", "phone"];

console.log(firstItem);

function Form() {
	const [name, setName] = useState("");

	function handleChange(e) {
		setName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		alert("Submitted");
		setName("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={name} required onChange={handleChange}></input>
			<button type="submit">Submit</button>
		</form>
	);
}

const items = ["Books", "Pens", "Code", "Coffee"];

const itemObjects = items.map((item, i) => ({ id: i, title: item }));

function Regular() {
	return <h1>Please Log in</h1>;
}

function Secret() {
	return <h1>Welcome</h1>;
}

function Authorize({ authorized }) {
	return <>{authorized ? <Secret /> : <Regular />}</>;
}

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

function Input() {
	const inputElement = useRef(null);

	function onButtonClick() {
		inputElement.current.focus();
	}

	const [checked, toggle] = useReducer((checked) => !checked, false);

	return (
		<>
			<input type="text" ref={inputElement} />
			<button onClick={onButtonClick}>Focus</button>
			<br />
			<input type="checkbox" value={checked} onChange={toggle}></input>
			<p>{checked ? "Checked" : "Not Checked"}</p>
		</>
	);
}

function App() {
	return (
		<div className="App">
			{/* <Authorize authorized={true} />
			<Header name="React Practices" />
			<Main type="react" items={itemObjects} />
			<Footer year={new Date().getFullYear()} />
			<Form /> */}
			{/* <Button /> */}
			{/* <State /> */}
			<Input />
		</div>
	);
}

export default App;
