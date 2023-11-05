import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import AuthCard from '../../components/AuthCard';

const Auth = () => {
	return (
		<>
			<Header />
			<AuthCard>
				<h3 className="mb-5">Login</h3>
				<FloatingLabel className="mb-4" label="Email">
					<Form.Control size="lg" type="email" id="login-email" placeholder="" />
				</FloatingLabel>
				<FloatingLabel className="mb-4" label="Password">
					<Form.Control size="lg" type="password" id="login-password" placeholder="" />
				</FloatingLabel>
				<Container className="d-grid gap-2">
					<Row>
						<Col>
							<Button className="btn-block" variant="primary" size="lg" id="login-button" type="submit">
								Login
							</Button>
						</Col>
						<Col>
							<Button className="btn-block" variant="secondary" size="lg" id="webauthn-button" type="submit">
								Passwordless
							</Button>
						</Col>
					</Row>
				</Container>
				<hr className="my-4" />
				<p>Third-party sign in not complete</p>
				<hr className="my-4" />
				<p>
					Not a member? <Link to="/auth/register">Sign Up</Link>
				</p>
			</AuthCard>
		</>
	);
};

export default Auth;
