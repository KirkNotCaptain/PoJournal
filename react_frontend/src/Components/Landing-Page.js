import PoJournalContext from "../Context";
import { useContext } from "react";

const LandingPage = () => {
	const context = useContext(PoJournalContext);

	var handlePageView = (page) => {
		context.setPageView(page);
	};

	return (
		<header className="App-header">
			<div
				className="start-writing-btn"
				onClick={() => handlePageView("Create")}
			>
				Start Writing{" "}
			</div>
			<div
				className="see-journal-btn"
				onClick={() => handlePageView("Journal")}
			>
				View Journal{" "}
			</div>
		</header>
	);
};

export default LandingPage;
