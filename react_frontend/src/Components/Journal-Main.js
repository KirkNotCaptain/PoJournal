import JournalTable from "./Journal-Table";
import Button from "@material-ui/core/Button";
import { useContext, useEffect } from "react";
import PoJournalContext from "../Context";

const JournalMain = () => {
	const context = useContext(PoJournalContext);
	var handleBackBtn = () => {
		context.setPageView("Landing");
	};

	return (
		<div className="journal-main">
			<Button variant="contained" onClick={handleBackBtn}>
				Back
			</Button>
			<h1> Journal Entries </h1>
			<JournalTable />
		</div>
	);
};

export default JournalMain;
