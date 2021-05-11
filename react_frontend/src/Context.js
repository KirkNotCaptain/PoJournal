import { createContext } from "react";

const PoJournalContext = createContext({
	allPoems: [],
	setAllPoems: () => {},
	pageView: "Landing",
	setPageView: (p) => {},
});

export default PoJournalContext;
