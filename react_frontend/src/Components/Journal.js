import PoJournalContext from "../Context";
import { useContext } from "react";

const Journal = () => {
	const context = useContext(PoJournalContext);

	return (
		<table className="journal-table">
			<tbody>
				{context.allPoems.map((entry) => {
					return (
						<tr>
							<th key={entry.id}>{entry.title}</th>
							<th>{entry.date}</th>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Journal;
