import React, { useState } from "react";
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

function App() {
	return (
		<div className="App">
			<Authorize authorized={true} />
			<Header name="React Practices" />
			<Main type="react" items={itemObjects} />
			<Footer year={new Date().getFullYear()} />
			<Form />
			{/* <Button /> */}
		</div>
	);
}

export default App;
