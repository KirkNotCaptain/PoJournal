import { useContext, useState } from "react";
import PoJournalContext from "../Context";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiTextField-root": {
			margin: theme.spacing(1),
			width: "75%",
			color: "white",
		},
		input: {
			color: "white",
		},
	},
}));

export default function CreateText() {
	const classes = useStyles();
	// const [value, setValue] = useState("Controlled");
	const context = useContext(PoJournalContext);

	const handleChange = (event) => {
		// console.log(event.target.value);
		context.setPoemBody(event.target.value);
		// setValue(event.target.value);
	};

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<div>
				<TextField
					id="outlined-multiline-static"
					label="Your New Poem"
					multiline
					rows={4}
					variant="outlined"
					onChange={handleChange}
				/>
			</div>
		</form>
	);
}
