import Navbar from '../components/Header';
import './Home.css';

const Home = () => (
	<div className="Home">
		<Navbar />
		<h1 id="BigName">Dream Tracker™</h1>
		<h3>A simple tool for logging, analyzing, and sharing your dreams.</h3>
		<p id="weTotallyStealData">We don't steal your data®</p>
		<img src="./sleeping.png" id="deepSleeper"></img>
		<h1 id="featureHeader1">Features</h1>
		<h3 className="feature1">Current</h3>
		<h3 className="feature1">Future</h3>
		<div className="feature2">Already in production</div>
		<div className="feature2">Ships by 4th quarter</div>
		<ul className="feature3">
			<li>Ability to log your dreams and store your thoughts about them in a super-secure database</li>
			<li>Automaticly create timestamps for every dream entry</li>
			<li>Right to purge your dreams from the database at the click of a button</li>
			<li>Easy access to the dream database from any device*<div id ="small">*not actually any device</div></li>
		</ul>
		<ul className="feature3">
			<li>Language analysis on any dream description to match its mood to a song</li>
			<li>Share dream interpretations and connect with others</li>
			<li>Improved dream filtering technology</li>
		</ul>
	</div>
);

export default Home;
