import "date-fns";
import { format } from "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import { useContext, useState } from "react";
import PoJournalContext from "../Context";

export default function EditDate() {
	// The first commit of Material-UI
	const context = useContext(PoJournalContext);
	const [selectedDate, setSelectedDate] = useState("2021-05-11T21:11:54");

	var currentDate = () => {
		var today = new Date();
		var dd = String(today.getDate()).padStart(2, "0");
		var mm = String(today.getMonth() + 1).padStart(2, "0");
		var yyyy = today.getFullYear();

		today = yyyy + "-" + mm + "-" + dd;

		var newDate = { date: today };
		var tmp = Object.assign(context.currentPoem, newDate);
		// context.setCurrentPoem(tmp);
		context.setPoemDate(tmp);

		return today;
	};

	const handleDateChange = (date) => {
		var formattedDate = format(new Date(date), "yyyy-MM-dd");
		console.log("FORMATTED DATE: ", formattedDate);

		context.setEditPoemDate(formattedDate);
		// setSelectedDate(formattedDate);
		// console.log("current poem: ", context.currentPoem);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justify="space-around">
				<KeyboardDatePicker
					disableToolbar
					variant="inline"
					format="MM/dd/yyyy"
					margin="normal"
					id="date-picker-inline"
					label="Select Date Created"
					value={context.editPoemDate}
					onChange={() => {
						handleDateChange();
					}}
					KeyboardButtonProps={{
						"aria-label": "change date",
					}}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	);
}
