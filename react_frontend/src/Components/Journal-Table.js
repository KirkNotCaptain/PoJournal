import PoJournalContext from "../Context";
import { useContext } from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DeleteModal from "./Delete-Modal";
import axios from "axios";
import { cursiveTheme } from "../Themes";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
		background: "beige",
	},
	button: {
		"&:hover": {
			cursor: "pointer",
		},
	},
});

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function JournalTable() {
	const classes = useStyles();
	const context = useContext(PoJournalContext);

	var handleDelete = (poem) => {
		axios
			.delete(`api/journal/${poem.id}/`)
			.then((res) => {
				console.log("delete successful: ", res);
				context.setUpdate(!context.update);
			})
			.catch((err) => {
				console.log("delete uncessfull,", err);
			});
	};

	var handleEdit = (poem) => {
		context.setEditPoemBody(poem.body);
		context.setEditPoemTitle(poem.title);
		context.setEditPoemDate(poem.date);
		context.setEditPoemID(poem.id);
		context.setPageView("Edit");
	};

	return (
		<ThemeProvider theme={cursiveTheme}>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Title</TableCell>
							<TableCell align="right">Date Last Modified</TableCell>
							<TableCell align="right">View/Edit</TableCell>
							<TableCell align="right">Delete</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{context.allPoems.map((poem) => (
							<TableRow key={poem.name}>
								<TableCell component="th" scope="row">
									{poem.title}
								</TableCell>
								<TableCell align="right">{poem.date}</TableCell>
								<TableCell align="right">
									<EditIcon
										onClick={() => {
											handleEdit(poem);
										}}
										className={classes.button}
									/>
								</TableCell>
								<TableCell align="right">
									<DeleteIcon
										onClick={() => {
											handleDelete(poem);
										}}
										className={classes.button}
									/>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</ThemeProvider>
	);
}
