import ReactDOMServer from 'react-dom/server';
import { useLocation } from 'react-router-dom';
import './Recommendations.css';

import { useEffect } from 'react';
import Navbar from '../components/Header';
import ResponseTable from '../components/MusicResponse';

const Recommendations = () => {
	const { state } = useLocation();

	useEffect(() => {
		console.log('running');
		if (state != null) {
			let responseField = document.getElementById('dreamText') as HTMLInputElement;
			if (responseField != null) {
				responseField.value = state['text'];
				getRec();
			}
		} else {
			console.log('null state');
		}
	}, []);

	async function getRec() {
		let str = document.getElementById('dreamText') as HTMLInputElement;
		if (str?.value != '') {
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ type: 'test', message: str?.value }),
			};
			let enterDreamDiv = document.getElementById('enterDream');
			if (enterDreamDiv != null) {
				enterDreamDiv.innerHTML = 'waiting...';
			}

			// eslint-disable-next-line no-restricted-globals
			const url = `http://${location.host.split(':')[0]}:5000/flask/hello`;
			try {
				const response = await fetch(url, requestOptions);
				console.log(response);
				const data = await response.json();
				let responseField = document.getElementById('response');
				if (responseField != null) {
					let enterDreamDiv = document.getElementById('enterDream');
					if (enterDreamDiv != null) {
						enterDreamDiv.innerHTML = ReactDOMServer.renderToString(
							<ResponseTable tracks={data['message']['tracks']['items']} />
						);
						console.log(JSON.stringify(data['message']));
						//FUCK string interpolation
					}
				}
			} catch (e) {
				console.log(url);
				console.error(e);
				throw e;
			}
		}
	}

	return (
		<div className="Dreams">
			<Navbar />

			{localStorage.getItem('user') ? (
				<>
					<div id="enterDream">
						<h2>Enter your dream:</h2>
						<textarea id="dreamText" placeholder="Last night, I dreamt..." />
						<br />
						<br />
						<button onClick={getRec} id="submitButton">
							submit
						</button>
					</div>
					<p id="response"></p>
				</>
			) : (
				<h2>Please Login</h2>
			)}
		</div>
	);
};

export default Recommendations;
