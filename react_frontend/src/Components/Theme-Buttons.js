import { useContext } from "react";
import PoJournalContext from "../Context";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		"& > *": {
			margin: theme.spacing(1),
		},
	},
}));

export default function ThemeButtons({ setTheme }) {
	const classes = useStyles();
	const context = useContext(PoJournalContext);

	var handleThemeChange = (newTheme) => {
		setTheme(newTheme);
		// context.setUpdate(!context.update);
	};

	return (
		<div className={classes.root}>
			<ButtonGroup
				size="large"
				color="primary"
				aria-label="large outlined primary button group"
			>
				<Button
					onClick={() => {
						// setTheme("cursive");
						handleThemeChange(" ");
						handleThemeChange("cursive");
					}}
				>
					Cursive
				</Button>
				<Button
					onClick={() => {
						handleThemeChange("typewriter");
					}}
				>
					Type Writer
				</Button>
				<Button>Modern</Button>
			</ButtonGroup>
		</div>
	);
}
