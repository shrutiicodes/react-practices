import React from "react";
import landing from "../img/landing.jpg";

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

export default Main;
