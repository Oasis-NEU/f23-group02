import './Dreams.css';

import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

import DreamTable from '../components/DreamTable';
import Navbar from '../components/Header';

const Dreams = () => {
	const [groceries, setDreams] = useState<any>({});

	async function addToDreams() {
		console.log('i was called!!!!');

		let input = document.getElementById('dreamText') as HTMLInputElement;
		console.log(input?.value);
		if (input?.value !== '') {
			const { error } = await supabase
				.from('dreams')
				.insert({ text: input?.value, user: localStorage.getItem('user') });
			if (error) {
				console.log(error);
			}
			input.value = '';
		}

		setScuffed(!scuffed);
	}

	async function removeFromDreams(id: string) {
		const { error } = await supabase.from('dreams').delete().eq('id', id);
		if (error) {
			console.log(error);
		}
		setScuffed(!scuffed);
	}

	const [scuffed, setScuffed] = useState<boolean>(false);

	//setInterval(() => setScuffed(!scuffed), 1000);

	useEffect(() => {
		async function fetchDreams() {
			const { data, error } = await supabase.from('dreams').select('*').eq('user', localStorage.getItem('user'));
			if (data) {
				setDreams(data);
			} else {
				console.log(error);
			}
		}

		fetchDreams();
	}, [scuffed]);

	return (
		<div className="Dreams">
			<Navbar />

			{localStorage.getItem('user') ? (
				<>
					<h2>Enter your dream:</h2>
					<textarea id="dreamText" placeholder="Last night, I dreamt..." />
					<br />
					<br />
					<button onClick={addToDreams} id="submitButton">
						submit
					</button>
					<br />
					<br />
					<h2>Dream List:</h2>

					<div style={{ padding: '2em' }}>
						<DreamTable groceries={groceries} removeFromDatabase={removeFromDreams} />
					</div>
				</>
			) : (
				<h2>Please Login</h2>
			)}
		</div>
	);
};

export default Dreams;
