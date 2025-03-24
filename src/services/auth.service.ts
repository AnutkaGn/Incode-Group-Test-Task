import {
	createUserWithEmailAndPassword,
	getAuth,
	signInWithEmailAndPassword,
	signOut,
} from '@react-native-firebase/auth';
import { collection, doc, setDoc, getFirestore } from '@react-native-firebase/firestore';

import { RegisterData, UserCredentials } from '../types';
import { useAuthStore } from '../store';
import { handleAuthError } from '../utils';
import { Messages } from '../constants';

const auth = getAuth();
const db = getFirestore();

export const AuthService = {
	async register({ username, email, password }: RegisterData): Promise<void> {
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			await userCredential.user.updateProfile({ displayName: username });

			await setDoc(doc(collection(db, 'users'), userCredential.user.uid), {
			username,
			email,
			createdAt: new Date(),
			});

			useAuthStore.getState().setUser(userCredential.user);
		} catch (error: unknown) {
			throw new Error(handleAuthError(error, Messages.REGISTRATION_FAILED));
		}
	},

	async login({ email, password }: UserCredentials): Promise<void> {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			useAuthStore.getState().setUser(userCredential.user);
		} catch (error: unknown) {
			throw new Error(handleAuthError(error, Messages.LOGIN_FAILED));
		}
	},

	async logout(): Promise<void> {
		try {
			await signOut(auth);
			useAuthStore.getState().setUser(null);
		} catch (error: unknown) {
			throw new Error(handleAuthError(error, Messages.LOGOUT_FAILED));
		}
	},
};
