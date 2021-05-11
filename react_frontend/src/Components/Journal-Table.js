import PoJournalContext from "../Context";
import { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
	table: {
		minWidth: 650,
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

	return (
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
					{context.allPoems.map((entry) => (
						<TableRow key={entry.name}>
							<TableCell component="th" scope="row">
								{entry.title}
							</TableCell>
							<TableCell align="right">{entry.date}</TableCell>
							<TableCell align="right">
								<EditIcon />
							</TableCell>
							<TableCell align="right">
								<DeleteIcon />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
