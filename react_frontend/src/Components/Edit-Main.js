import { useContext, useState } from "react";
import PoJournalContext from "../Context";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import { cursiveTheme } from "../Themes";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import EditDate from "./Edit-Date.js";
import EditText from "./Edit-Text";
import axios from "axios";
import Cookies from "js-cookie";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
}));

export default function CreateMain() {
	const classes = useStyles();
	const context = useContext(PoJournalContext);

	var handleBackBtn = () => {
		context.setPageView("Landing");
	};

	var handleEditSubmit = () => {
		var csrftoken = Cookies.get("csrftoken");

		var newPoem = {
			title: context.editPoemTitle,
			body: context.editPoemBody,
			date: context.editPoemDate,
		};
		console.log("New poem: ", newPoem);

		axios
			.put(`api/journal/${context.editPoemID}/`, JSON.stringify(newPoem), {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				console.log("post success: ", response);
				context.setUpdate(!context.update);
				context.setPageView("Landing");
			})
			.catch((err) => {
				console.log("post failue: ", err);
			});
	};

	var handleTitle = (event) => {
		context.setEditPoemTitle(event.target.value);
	};

	return (
		<ThemeProvider theme={cursiveTheme}>
			<div>
				<Button variant="contained" onClick={handleBackBtn}>
					Back
				</Button>
				<Button variant="contained" onClick={handleEditSubmit}>
					Submit
				</Button>
				<div className="poem-details">
					<form className={classes.root} noValidate autoComplete="off">
						<TextField
							id="standard-basic"
							label={context.editPoemTitle}
							onChange={handleTitle}
						/>
					</form>
					<EditDate />
				</div>
				<EditText />
			</div>
		</ThemeProvider>
	);
}
