import './Dreams.css';

import { useEffect, useState } from 'react';
import { supabase } from '../supabase';

import DreamTable from '../components/DreamTable';
import Navbar from '../components/Header';
import { Placeholder } from 'react-bootstrap';

const Dreams = () => {
	const [groceries, setDreams] = useState<any>({});

	async function addToDreams() {
		let button = document.getElementById('dreamText') as HTMLInputElement;
		console.log(button?.value);
		if(button?.value != ""){
			const { error } = await supabase.from('dreams').insert({ text: button?.value });
			if (error) {
				console.log(error);
			}
			button.value = ""
		}
	}

	async function removeFromDreams(id:string){
		const{error} = await supabase.from('dreams').delete().eq("id",id);
		if(error){
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
			<textarea id="dreamText" placeholder="Last night, I dreamt..." />
			<br />
			<br />
			<button onClick={addToDreams} id="submitButton">submit</button>
			<br />
			<br />
			<br />
			<br />
			<h1>Dream List:</h1>
			<DreamTable groceries={groceries} removeFromDatabase={removeFromDreams} />
		</div>
	);
};

export default Dreams;
