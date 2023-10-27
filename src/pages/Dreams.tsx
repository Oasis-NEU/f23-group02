import './Dreams.css';

import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

import DreamTable from '../components/DreamTable';
import Navbar from '../components/Header';

const Dreams = () => {
	const [groceries, setDreams] = useState<any>({});

	async function addToDreams() {
		let button = document.getElementById('dreamText') as HTMLInputElement;
		console.log(button?.value);
		const { error } = await supabase.from('dreams').insert({ text: button?.value });
		if (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		async function fetchDreams() {
			const { data, error } = await supabase.from('dreams').select('*');
			if (data) {
				setDreams(data);
			} else {
				console.log(error);
			}

			// console.log(groceries);
		}

		fetchDreams();
	}, [groceries]); // on page load

	return (
		<div className="Dreams">
			<Navbar />

			<h1>Enter your dream:</h1>
			<textarea id="dreamText" />
			<br />
			<br />
			<br />
			<button onClick={addToDreams}>submit</button>
			<h1>Dream List:</h1>
			<DreamTable groceries={groceries} />
		</div>
	);
};

export default Dreams;
