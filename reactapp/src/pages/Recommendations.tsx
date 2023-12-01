import './Recommendations.css';
import ReactDOMServer from 'react-dom/server'
import { useLocation } from "react-router-dom";

import ResponseTable from '../components/MusicResponse';
import Navbar from '../components/Header';
import { useEffect } from 'react';

const Recommendations = () => {
	const {state} = useLocation();


	useEffect(() =>{ 
			console.log("running")
			if(state != null){
				let responseField = document.getElementById('dreamText') as HTMLInputElement;
				if(responseField != null){
					responseField.value = state['text']
					getRec();
				}
			}
			else{
				console.log("null state")
			}
		}
	, [])

	async function getRec(){
		let str = document.getElementById('dreamText') as HTMLInputElement;
		if(str?.value != ""){
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ type: 'test', message:str?.value })
			};
			let enterDreamDiv = document.getElementById('enterDream')
			if(enterDreamDiv != null){
				enterDreamDiv.innerHTML = "waiting..."
			}
			const response = await fetch("http://127.0.0.1:5000/flask/hello", requestOptions);
			console.log(response)
			const data = await response.json();
			let responseField = document.getElementById('response');
			if(responseField != null){
				let enterDreamDiv = document.getElementById('enterDream');
				if(enterDreamDiv != null){
					enterDreamDiv.innerHTML = ReactDOMServer.renderToString(<ResponseTable tracks = {data["message"]["tracks"]["items"]}/>);
					console.log(JSON.stringify(data["message"]))
					//FUCK string interpolation
				}
			}
		}
	}

	return (
		<div className="Dreams">
			<Navbar />
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
		</div>
	);
};

export default Recommendations;
