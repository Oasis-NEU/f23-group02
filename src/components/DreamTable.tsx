import './DreamTable.css';

function tableRow(dreams: Record<string, string>[]) {
	try {
		const items = dreams.map((dream) => (
			<tr>
				<th>{dream.id}</th>
				<th>{timestampNicer(dream.created_at)}</th>
				<th>{dream.text}</th>
			</tr>
		));
		return (
			<table>
				<tr>
					<th>id</th>
					<th>timestamp</th>
					<th>text</th>
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

function DreamTable({ groceries }: { groceries: any }) {
	return tableRow(groceries);
}

export default DreamTable;
