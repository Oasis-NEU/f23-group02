import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navigation/Navbar';
import { supabase } from './supabase';

function App() {
	const [groceries, setDreams] = useState<any>({});

	async function fetchDreams() {
		const {data, error} = await supabase.from('dreams').select('*');
		if (data) {
			setDreams(data);
		} else {
			console.log(error);
		}
	}

	async function addToDreams(){
		let button = document.getElementById("dreamText") as HTMLInputElement
		console.log(button?.value)
		const {error} = await supabase.from('dreams').insert({text:button?.value});
		if(error){
			console.log(error);
		}
	}

	useEffect(() => {
		// our fetch function

		fetchDreams();
	}, []); // on page load

	return (
		<div className="App">
			<Navbar />
			<h1>Enter your dream:</h1>
			<textarea id="dreamText"/>
			<br/>
			<br/>
			<br/>
			<button onClick={addToDreams}>submit</button>

			<h1>List of dreams:</h1>

			<pre>
				{JSON.stringify(groceries, null, 2)}
			</pre>

			{/* <header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
			</header> */}
		</div>
	);
}

export default App;
