import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const OurNavbar = () => {
	return (
		<Navbar expand="lg">
			<Container className="bg-body-tertiary">
				<Navbar.Brand href="#home">Dream Tracker</Navbar.Brand>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#music">Music</Nav.Link>
						<Nav.Link href="#connect">Connect</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
	// <nav className=''>
	// 	<ul>
	// 		<li><a href=".">Home</a></li>
	// 		<li><a href='.'>Music</a></li>
	// 		<li><a href='.'>Connect</a></li>
	// 	</ul>
	// 	<ul>

	// 	</ul>
	// </nav>
};

export default OurNavbar;
