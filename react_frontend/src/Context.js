import { createContext } from "react";

const PoJournalContext = createContext({
	allPoems: [],
	setAllPoems: () => {},
	pageView: "Landing",
	setPageView: (p) => {},
	currentPoem: {
		title: "Untitled",
		body: "",
		date: "",
	},
	setCurrentPoem: () => {},
});

export default PoJournalContext;
