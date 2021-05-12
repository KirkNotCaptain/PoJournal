import { createContext } from "react";

const PoJournalContext = createContext({
	allPoems: [],
	setAllPoems: () => {},
	pageView: "Landing",
	setPageView: (p) => {},
	poemBody: "",
	setPoemBody: () => {},
	poemTitle: "",
	setPoemTitle: () => {},
	poemDate: "",
	setPoemDate: () => {},
	update: true,
	setUpdate: () => {},
});

export default PoJournalContext;
