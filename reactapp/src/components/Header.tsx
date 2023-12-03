import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

import './Header.css';

import Auth from '../pages/Auth/Auth';
import Register from '../pages/Auth/Register';
import Dreams from '../pages/Dreams';
import Home from '../pages/Home';
import Recommendations from '../pages/Recommendations';
import { Logout } from '../utils/authentication';

export const routes = [
	{ path: '/', element: <Home /> },
	{ path: '/home', element: <Home /> },
	{ path: '/dreams', element: <Dreams /> },
	{ path: '/auth', element: <Auth /> },
	{ path: '/auth/register', element: <Register /> },
	{ path: '/music', element: <Recommendations /> },
];

// as={Link} ensures that react router is used
// as={NavLink} keeps track of which page it is on so the active link can be styled
const Header = () => (
	<Navbar className="user-select-none" expand="lg" bg="dark" data-bs-theme="dark">
		<Container className="bg-body-tertiary">
			<NavbarBrand as={Link} to="/" id="appName">
				Dream Tracker
				<img src="/zzz.png" id="zzz" alt="zzz" />
			</NavbarBrand>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto" defaultActiveKey="/">
					<Nav.Link as={NavLink} to="/">
						Home
					</Nav.Link>
					<Nav.Link as={NavLink} to="/dreams">
						Dreams
					</Nav.Link>
					<Nav.Link as={NavLink} to="/music">
						Music
					</Nav.Link>
					<Nav.Link as={NavLink} to="/connect" disabled>
						Connect
					</Nav.Link>
				</Nav>
				<Nav>
					{localStorage.getItem('user') ? (
						<Nav.Link as={NavLink} /* to="/" */ to="" onClick={Logout}>
							Logout
						</Nav.Link>
					) : (
						<Nav.Link as={NavLink} to="/auth">
							Auth
						</Nav.Link>
					)}
				</Nav>
			</Navbar.Collapse>
		</Container>
	</Navbar>
);

export default Header;
