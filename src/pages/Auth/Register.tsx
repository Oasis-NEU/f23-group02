import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import AuthCard from '../../components/AuthCard';
import Header from '../../components/Header';

const Register = () => {
	async function setupWebAuthn(userInfo: { email: string; username: string }) {
		const creds = navigator.credentials.create({
			publicKey: {
				challenge: {} as any,
				rp: {
					name: 'Dream Tracker',
				},
				user: {
					id: {} as any,
					name: userInfo.email,
					displayName: userInfo.username,
				},
				pubKeyCredParams: [{ alg: 9, type: 'public-key' }],
			},
		});
	}

	return (
		<>
			<Header />

			<AuthCard>
				<h3 className="mb-5">Register</h3>

				<FloatingLabel className="mb-4" label="Username">
					<Form.Control size="lg" type="username" id="register-username" placeholder="" />
				</FloatingLabel>
				<FloatingLabel className="mb-4" label="Email">
					<Form.Control size="lg" type="email" id="register-email" placeholder="" />
				</FloatingLabel>
				<FloatingLabel className="mb-4" label="Password">
					<Form.Control size="lg" type="password" id="register-password" placeholder="" />
				</FloatingLabel>

				<Container className="d-grid gap-2">
					<Row>
						<Col>
							<Button className="btn-block" variant="primary" size="lg" id="register-button" type="submit">
								Sign Up
							</Button>
						</Col>
						<Col>
							<Button className="btn-block" variant="secondary" size="lg" id="webauthn-button" type="submit">
								Passwordless
							</Button>
						</Col>
					</Row>
				</Container>
			</AuthCard>
		</>
	);
};

export default Register;
