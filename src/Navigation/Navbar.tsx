import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const OurNavbar = () => {
	return (
		<Navbar expand="lg">
			<Container className="bg-body-tertiary">
				<Navbar.Brand href="#home" className="navbarItem navbarBox">Dream Tracker</Navbar.Brand>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home" className="navbarItem navbarBox">Home</Nav.Link>
						<Nav.Link href="#music" className="navbarItem navbarBox">Music</Nav.Link>
						<Nav.Link href="#connect" className="navbarItem navbarBox">Connect</Nav.Link>
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
