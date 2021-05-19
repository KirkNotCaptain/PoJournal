import { createContext } from "react";
import { cursiveTheme } from "./Themes";

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
	editPoemBody: "",
	setEditPoemBody: () => {},
	editPoemTitle: "",
	setEditPoemTitle: () => {},
	editPoemDate: "",
	setEditPoemDate: () => {},
	editPoemID: 0,
	setEditPoemID: () => {},
	createTheme: cursiveTheme,
	setCreateTheme: () => {},
});

export default PoJournalContext;
