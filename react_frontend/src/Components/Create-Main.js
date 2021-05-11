import { useContext } from "react";
import PoJournalContext from "../Context";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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

	return (
		<div>
			<Button variant="contained" onClick={handleBackBtn}>
				{" "}
				Back{" "}
			</Button>
			<form className={classes.root} noValidate autoComplete="off">
				<TextField id="standard-basic" label="Standard" />
				<TextField id="filled-basic" label="Filled" variant="filled" />
				<TextField id="outlined-basic" label="Outlined" variant="outlined" />
			</form>
		</div>
	);
}
