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

	var handleSave = () => {
		var csrftoken = Cookies.get("csrftoken");

		// , {
		//   headers: { "X-CSRFToken": csrftoken },
		// }

		// console.log("CURRENT POEM:", JSON.stringify(context.currentPoem));

		axios
			.post(
				"api/journal/",
				JSON.stringify({
					title: "Example",
					body: "something",
					date: "2021-05-11",
				}),
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((response) => {
				console.log("post success: ", response);
			})
			.catch((err) => {
				console.log("post failue: ", err);
			});
	};

	return (
		<div>
			<Button variant="contained" onClick={handleBackBtn}>
				Back
			</Button>
			<Button variant="contained" onClick={handleSave}>
				Save
			</Button>
			<div className="poem-details">
				<form className={classes.root} noValidate autoComplete="off">
					<TextField id="standard-basic" label="Write Your Title" />
				</form>
				<CreateDate />
			</div>
			<CreateText />
		</div>
	);
}
