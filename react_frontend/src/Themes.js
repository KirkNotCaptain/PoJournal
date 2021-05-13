import { createMuiTheme } from "@material-ui/core/styles";

const typeWriterTheme = createMuiTheme({
	typography: {
		fontFamily: "courier new",
	},
});

const cursiveTheme = createMuiTheme({
	typography: {
		fontFamily: "cursive",
	},
});

export { typeWriterTheme, cursiveTheme };
