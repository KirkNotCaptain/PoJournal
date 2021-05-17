import PoJournalContext from "../Context";
import { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CreateMain from "./Create-Main";
import JournalMain from "./Journal-Main";

const LandingPage = () => {
	const context = useContext(PoJournalContext);

	var handlePageView = (page) => {
		context.setPageView(page);
	};

	return (
		<Router>
			<header className="App-header">
				<h1 className="title"> PoeJournal </h1>
				<h2 className="subtitle"> A Simple Poem Editor</h2>
				<div
					className="start-writing-btn"
					onClick={() => handlePageView("Create")}
				>
					<Link to="/create"> Start Writing </Link>
				</div>
				<div
					className="see-journal-btn"
					onClick={() => handlePageView("Journal")}
				>
					<Link to="/journal"> View Journal </Link>
				</div>
			</header>
			<Switch>
				<Route path="/create">
					<CreateMain />
				</Route>
				<Route path="/journal">
					<JournalMain />
				</Route>
			</Switch>
		</Router>
	);

	// return (
	// 	<header className="App-header">
	// 		<h1 className="title"> PoeJournal </h1>
	// 		<h2 className="subtitle"> A Simple Poem Editor</h2>
	// 		<div
	// 			className="start-writing-btn"
	// 			onClick={() => handlePageView("Create")}
	// 		>
	// 			<h1> Start Writing </h1>
	// 		</div>
	// 		<div
	// 			className="see-journal-btn"
	// 			onClick={() => handlePageView("Journal")}
	// 		>
	// 			<h1> View Journal </h1>
	// 		</div>
	// 	</header>
	// );
};

export default LandingPage;
