// #region Common

import { supabase } from '../supabase';

function generateChallenge() {
	const challenge = new Uint8Array(32);
	window.crypto.getRandomValues(challenge);

	return challenge;
}

// #endregion

// #region Registration

export async function setupWebAuthn(userInfo: { uuid: string; email: string; username: string }) {
	try {
		const creds = await navigator.credentials.create({
			publicKey: {
				challenge: generateChallenge(),
				rp: {
					name: 'Dream Tracker',
				},
				user: {
					id: Uint8Array.from(userInfo.uuid, (c) => c.charCodeAt(0)),
					name: userInfo.email,
					displayName: userInfo.username,
				},
				pubKeyCredParams: [
					{ type: 'public-key', alg: -8 },
					{ type: 'public-key', alg: -7 },
					{ type: 'public-key', alg: -257 },
				],
				// add excludeCredentials to prevent the same user from registering twice
			},
		});

		console.log(creds);

		return creds;
	} catch (error) {
		console.error(error);

		return null;
	}
}

// this should be in the backend
export async function storeWebAuthn() {
	// ...
}

export async function registerPassword(userInfo: { uuid: string; email: string; username: string; password: string }) {
	// ...
}

export async function storeRegistrationPassword() {
	// ...
}

// #endregion

// #region Login

// this should be in the backend
export async function getAllowedCredentials(email: string) {
	supabase.from('users').select('webauthn_algorithms').eq('email', email);
}

export async function authenticateWebAuthn(allowCredentials: PublicKeyCredentialDescriptor[]) {
	const creds = await navigator.credentials.get({
		publicKey: {
			challenge: generateChallenge(),
			allowCredentials,
		},
	});
}

// #endregion
