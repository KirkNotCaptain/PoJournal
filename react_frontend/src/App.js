import "./App.css";
import "axios";

import { useState, useEffect } from "react";
import axios from "axios";
import LandingPage from "./Components/Landing-Page";
import JournalMain from "./Components/Journal-Main";
import CreateMain from "./Components/Create-Main";
import PoJournalContext from "./Context";

function App() {
	const [pageView, setPageView] = useState("Landing");
	const [allPoems, setAllPoems] = useState([]);
	const [currentPoem, setCurrentPoem] = useState({
		title: "Untitled",
		body: "",
		date: "",
	});

	console.log("current poem: ", currentPoem);

	var renderPage = () => {
		if (pageView === "Landing") {
			return <LandingPage />;
		} else if (pageView === "Journal") {
			return <JournalMain />;
		} else if (pageView === "Create") {
			return <CreateMain />;
		}
	};

	useEffect(() => {
		axios.get("/api/journal/").then((data) => {
			setAllPoems(data.data);
			console.log(data.data); //this works - can see the data
		});
	}, []);

	return (
		<PoJournalContext.Provider
			value={{ allPoems, pageView, setPageView, currentPoem, setCurrentPoem }}
		>
			<div className="App">{renderPage()}</div>
		</PoJournalContext.Provider>
	);
}

export default App;
