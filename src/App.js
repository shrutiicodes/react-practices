import React from "react";
import "./App.css";

function Header() {
	return (
		<header>
			<h1>Project Name</h1>
		</header>
	);
}

function Main() {
	return (
		<header>
			<h2>This is our project</h2>
		</header>
	);
}

function Footer() {
	return (
		<header>
			<h3>All Rights Reserved Project Name &copy; 2021</h3>
		</header>
	);
}

function App() {
	return (
		<div className="App">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
