import PoJournalContext from "../Context";
import { useContext } from "react";

const LandingPage = () => {
	const context = useContext(PoJournalContext);

	var handlePageView = (page) => {
		context.setPageView(page);
	};

	return (
		<header className="App-header">
			<h1 className="title"> PoeJournal </h1>
			<h2 className="subtitle"> A Simple Poem Editor</h2>
			<div
				className="start-writing-btn"
				onClick={() => handlePageView("Create")}
			>
				<h1> Start Writing </h1>
			</div>
			<div
				className="see-journal-btn"
				onClick={() => handlePageView("Journal")}
			>
				<h1> View Journal </h1>
			</div>
		</header>
	);
};

export default LandingPage;
