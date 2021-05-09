import logo from "./logo.svg";
import "./App.css";
import "axios";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [list, setList] = useState([]);

	useEffect(() => {
		axios.get("/api/journal").then((data) => {
			setList(data);
			console.log(data); //this works - can see the data
		});
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;