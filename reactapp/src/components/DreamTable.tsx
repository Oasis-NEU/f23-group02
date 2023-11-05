import './DreamTable.css';

function tableRow(dreams: Record<string, string>[], removeFromDatabase: (str: string) => undefined) {
	try {
		const items = dreams.map((dream) => (
			<tr>
				<td>{timestampNicer(dream.created_at)}</td>
				<td className="dreamTableData">{dream.text}</td>
				<td>
					<button onClick={() => removeFromDatabase(dream.id)} className="dreamDeletor">
						X
					</button>
				</td>
			</tr>
		));
		return (
			<table>
				<tr>
					<th>
						Timestamp
						{/* <label>
								Start
								<input type="date" defaultValue="2000-02-29" id="start"></input>
								<p></p>
								End
								<input type="date" defaultValue="2023-10-31"></input>
							</label> */}
					</th>
					<th>Dream Description</th>
					<th>X?</th>
				</tr>
				{items}
			</table>
		);
	} catch (e) {
		console.error(e);

		return (
			<table>
				<tr>table no worky :(</tr>
			</table>
		);
	}
}

function timestampNicer(timestamp: string) {
	const date = new Date(timestamp);

	return date.toLocaleDateString(undefined, { hour: 'numeric', minute: '2-digit' });
}

function DreamTable({ groceries, removeFromDatabase }: { groceries: any; removeFromDatabase: any }) {
	return tableRow(groceries, removeFromDatabase);
}

export default DreamTable;