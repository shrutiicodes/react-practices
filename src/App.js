import React from "react";
import "./App.css";
import Header from "./Pages/Header";
import Main from "./Pages/Main";
import Footer from "./Pages/Footer";
import Button from "./Pages/Button";
import Form from "./Pages/Form";
import Authorize from "./Pages/Authorize";
import Input from "./Pages/Input";
import FetchData from "./Pages/FetchData";
import State from "./Pages/State";
import Error from "./Pages/Error";
import { Route, Switch, Link } from "react-router-dom";

const items = ["Books", "Pens", "Code", "Coffee"];

const itemObjects = items.map((item, i) => ({ id: i, title: item }));

function App() {
	return (
		<div className="App">
			<h1>Hello world!</h1>
			{/* <nav>
				<Link to="/dashboard">Dashboard</Link>
				<Link to="/btn">Button</Link>
				<Link to="/form">Form</Link>
				<Link to="/input">Input</Link>
				<Link to="/data">User Data</Link>
				<Link to="/state">State</Link>
			</nav>
			<Switch>
				<Route exact path="/">
					<Authorize authorized={false} />
				</Route>
				<Route exact path="/dashboard">
					<Header name="React Practices" />
					<Main type="react" items={itemObjects} />
					<Footer year={new Date().getFullYear()} />
				</Route>

				<Route exact path="/btn">
					<Button />
				</Route>
				<Route exact path="/form">
					<Form />
				</Route>
				<Route exact path="/input">
					<Input />
				</Route>
				<Route exact path="/data">
					<FetchData login="shrutipanjwani" />
				</Route>
				<Route exact path="/state">
					<State />
				</Route>
				<Route>
					<Error />
				</Route>
			</Switch> */}
		</div>
	);
}
export default App;
