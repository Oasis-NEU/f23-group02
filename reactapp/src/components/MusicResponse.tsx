import './DreamTable.css';

function parseResponse(tracks: Record<string, string>[]) {
	try {
		const items = tracks.map((dream) => (
			<tr>
				<td>{dream['name']}</td>
			</tr>
		));
		return (
			<table>
				<tr>
					<th>Song name</th>
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

function ResponseTable({ tracks }: { tracks: any }) {
	return parseResponse(tracks);
}

export default ResponseTable;
