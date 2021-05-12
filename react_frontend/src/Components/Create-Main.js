import { useContext, useState } from "react";
import PoJournalContext from "../Context";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CreateDate from "./Create-Date.js";
import CreateText from "./Create-Text.js";
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

	var handleSubmit = () => {
		var csrftoken = Cookies.get("csrftoken");

		var newPoem = {
			title: context.poemTitle,
			body: context.poemBody,
			date: context.poemDate,
		};
		console.log("New poem: ", newPoem);

		axios
			.post("api/journal/", JSON.stringify(newPoem), {
				headers: {
					"Content-Type": "application/json",
				},
			})
			.then((response) => {
				console.log("post success: ", response);
				context.setPageView("Landing");
			})
			.catch((err) => {
				console.log("post failue: ", err);
			});
	};

	var handleTitle = (event) => {
		context.setPoemTitle(event.target.value);
	};

	return (
		<div>
			<Button variant="contained" onClick={handleBackBtn}>
				Back
			</Button>
			<Button variant="contained" onClick={handleSubmit}>
				Submit
			</Button>
			<div className="poem-details">
				<form className={classes.root} noValidate autoComplete="off">
					<TextField
						id="standard-basic"
						label="Write Your Title"
						onChange={handleTitle}
					/>
				</form>
				<CreateDate />
			</div>
			<CreateText />
		</div>
	);
}
