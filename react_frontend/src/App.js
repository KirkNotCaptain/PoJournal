import "./App.css";
import "axios";
import { useState, useEffect } from "react";
import axios from "axios";
import LandingPage from "./Components/Landing-Page";
import Journal from "./Components/Journal";
import PoJournalContext from "./Context";

function App() {
	const [pageView, setPageView] = useState("Landing");
	const [allPoems, setAllPoems] = useState([]);

	var renderPage = () => {
		if (pageView === "Landing") {
			return <LandingPage />;
		} else if (pageView === "Journal") {
			return <Journal />;
		}
	};

	useEffect(() => {
		axios.get("/api/journal").then((data) => {
			setAllPoems(data.data);
			console.log(data.data); //this works - can see the data
		});
	}, []);

	return (
		<PoJournalContext.Provider value={{ allPoems, pageView, setPageView }}>
			<div className="App">{renderPage()}</div>
		</PoJournalContext.Provider>
	);
}

export default App;
