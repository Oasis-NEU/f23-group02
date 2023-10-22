import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navigation/Navbar';
import { supabase } from './supabase';

function App() {
	const [groceries, setGroceries] = useState<any[]>([]);

	async function fetchGroceries() {
		const { data, error } = await supabase.from('Groceries').select('*');
		if (data) {
			setGroceries(data);
		} else {
			console.log(error);
		}
	}

	useEffect(() => {
		// our fetch function

		fetchGroceries();
	}, []); // on page load

	return (
		<div className="App">
			<Navbar />

			<h1>Grocery List</h1>

			<></>

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
