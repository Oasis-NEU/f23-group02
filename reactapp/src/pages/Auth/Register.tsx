import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import AuthCard from '../../components/AuthCard';
import Header from '../../components/Header';

import { setupWebAuthn } from '../../utils/authentication';
import './Register.css';

// todo: make this less janky, and remove the error state once fixed

const Register = () => {
	enum Forms {
		Username = 1 << 1,
		Email = 1 << 2,
		Password = 1 << 3,
	}

	type FormValues = {
		username: string;
		email: string;
		password: string;
	};

	function getAndValidate(forms: Forms): Partial<FormValues> | false {
		const ret: Partial<FormValues> = {};

		if (forms & Forms.Username) {
			let username = document.getElementById('register-username') as HTMLInputElement;
			if (username?.value === '') {
				setMissingUsername(true);
				return false;
			} else ret.username = username.value;
		}
		if (forms & Forms.Email) {
			let email = document.getElementById('register-email') as HTMLInputElement;
			if (email?.value === '') {
				setMissingEmail(true);
				return false;
			} else ret.email = email.value;
		}
		if (forms & Forms.Password) {
			let password = document.getElementById('register-password') as HTMLInputElement;
			if (password?.value === '') {
				setMissingPassword(true);
				return false;
			} else ret.password = password.value;
		}

		return ret;
	}

	function passwordlessClick() {
		const valid = getAndValidate(Forms.Username | Forms.Email);
		if (!valid) return;
		const { username, email } = valid as Omit<FormValues, 'password'>;

		const res = setupWebAuthn({ uuid: nanoid(), email, username });
		if (res == null) {
			setAuthnVisible(true);
		}
	}

	function signUpClick() {
		const valid = getAndValidate(Forms.Username | Forms.Email | Forms.Password);
		if (!valid) return;
		const { username, email, password } = valid as FormValues;
	}

	const [missingUsername, setMissingUsername] = useState(false);
	const [missingEmail, setMissingEmail] = useState(false);
	const [missingPassword, setMissingPassword] = useState(false);
	const [authnVisible, setAuthnVisible] = useState(false);

	return (
		<>
			<Header />

			<AuthCard>
				<h3 className="mb-5">Register</h3>

				<FloatingLabel className={`mb-4 ${missingUsername ? ' auth-form-error' : ''}`} label="Username">
					<Form.Control size="lg" type="username" id="register-username" placeholder="" />
					{missingUsername && <p className="register-error">You must enter a username</p>}
				</FloatingLabel>

				<FloatingLabel className={`mb-4${missingEmail ? ' auth-form-error' : ''}`} label="Email">
					<Form.Control size="lg" type="email" id="register-email" placeholder="" />
					{missingEmail && <p className="register-error">You must enter an email</p>}
				</FloatingLabel>
				<FloatingLabel className={`mb-4${missingPassword ? ' auth-form-error' : ''}`} label="Password">
					<Form.Control size="lg" type="password" id="register-password" placeholder="" />
					{missingPassword && <p className="register-error">You must enter a password</p>}
				</FloatingLabel>

				<Container className="d-grid gap-2">
					<Row>
						<Col>
							<Button
								className="btn-block"
								variant="primary"
								size="lg"
								id="register-button"
								type="submit"
								onClick={signUpClick}
							>
								Sign Up
							</Button>
						</Col>
						<Col>
							<Button
								className="btn-block"
								variant="secondary"
								size="lg"
								id="webauthn-button"
								type="submit"
								onClick={passwordlessClick}
							>
								Passwordless
							</Button>
							{authnVisible && <p className="register-error">An error occurred while authenticating</p>}
						</Col>
					</Row>
				</Container>
			</AuthCard>
		</>
	);
};

export default Register;
