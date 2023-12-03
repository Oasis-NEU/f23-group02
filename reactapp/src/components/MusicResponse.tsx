import { AnyARecord, AnyRecord } from 'dns';
import './DreamTable.css';

function spotifyFrame(str:string){
	return(
		<iframe style={{borderRadius: '12px'}} src={getEmbedLink(str)} width="100%" height="78" frameBorder="0" allowFullScreen={false} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
	)
}

function getEmbedLink(str:string){
	let index = str.indexOf('track')
	let newString = str.slice(index)
	return("https://open.spotify.com/embed/" + newString)
}

function parseResponse(tracks: Record<string, any>[]) {
	try {
		const items = tracks.map((dream) => (
			<tr>
				<td>{dream['name']}</td>
				<td>{dream['artists'][0]['name']}</td>
				<td><a href={dream['external_urls']['spotify']}>Spotify Link</a></td>
				<td>{spotifyFrame(dream['external_urls']['spotify'])}</td>
			</tr>
		));
		return (
			<table>
				<tr>
					<th>Song name</th>
					<th>Artist</th>
					<th>Link</th>
					<th>Listen Now</th>
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
