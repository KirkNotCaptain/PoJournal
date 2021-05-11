import PoJournalContext from "../Context";
import { useContext } from "react";

const LandingPage = () => {
	const context = useContext(PoJournalContext);

	var handleViewJournal = () => {
		context.setPageView("Journal");
	};

	return (
		<header className="App-header">
			<div className="start-writing-btn">Start Writing </div>
			<div className="see-journal-btn" onClick={handleViewJournal}>
				View Journal{" "}
			</div>
		</header>
	);
};

export default LandingPage;
