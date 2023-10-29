import './DreamTable.css';

function tableRow(dreams: Record<string, string>[], removeFromDatabase: (str: string) => undefined) {
	try {
		const items = dreams.map((dream) => (
			<tr>
				<td>{timestampNicer(dream.created_at)}</td>
				<td>{dream.text}</td>
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
					<th>Remove?</th>
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
	// console.log('timestamp: ' + timestamp);

	let toReturn = '';
	const dateList = timestamp.slice(0, 10).split('-');
	toReturn += dateList[1] + '/' + dateList[2] + '/' + dateList[0] + '   ';
	let hours = parseInt(timestamp.slice(11, 13));
	let suffix = hours >= 12 ? ' PM' : ' AM';
	toReturn += ((hours + 11) % 12) + 1 + timestamp.slice(13, 16) + suffix;
	toReturn += ' UTC';
	return toReturn;
}

function DreamTable({ groceries, removeFromDatabase }: { groceries: any; removeFromDatabase: any }) {
	return tableRow(groceries, removeFromDatabase);
}

export default DreamTable;
