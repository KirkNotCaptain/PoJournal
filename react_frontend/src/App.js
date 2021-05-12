import "./App.css";
import "axios";

import { useState, useEffect } from "react";
import axios from "axios";
import LandingPage from "./Components/Landing-Page";
import JournalMain from "./Components/Journal-Main";
import CreateMain from "./Components/Create-Main";
import EditMain from "./Components/Edit-Main";
import PoJournalContext from "./Context";

function App() {
	const [pageView, setPageView] = useState("Landing");
	const [allPoems, setAllPoems] = useState([]);
	const [poemBody, setPoemBody] = useState("");
	const [poemTitle, setPoemTitle] = useState("Untitled");
	const [poemDate, setPoemDate] = useState("");
	const [update, setUpdate] = useState(true);
	const [editPoem, setEditPoem] = useState({});

	var renderPage = () => {
		if (pageView === "Landing") {
			return <LandingPage />;
		} else if (pageView === "Journal") {
			return <JournalMain />;
		} else if (pageView === "Create") {
			return <CreateMain />;
		} else if (pageView === "Edit") {
			return <EditMain />;
		}
	};

	useEffect(() => {
		axios.get("/api/journal/").then((data) => {
			setAllPoems(data.data);
			//console.log(data.data);
		});
	}, [update]);

	return (
		<PoJournalContext.Provider
			value={{
				allPoems,
				pageView,
				setPageView,
				poemBody,
				setPoemBody,
				poemTitle,
				setPoemTitle,
				poemDate,
				setPoemDate,
				update,
				setUpdate,
				editPoem,
				setEditPoem,
			}}
		>
			<div className="App">{renderPage()}</div>
		</PoJournalContext.Provider>
	);
}

export default App;
