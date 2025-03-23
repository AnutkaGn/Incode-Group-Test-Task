/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { FirebaseAuthTypes, getAuth, onAuthStateChanged } from '@react-native-firebase/auth';

import { useAuthStore } from '../../store';

const auth = getAuth();

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const setUser = useAuthStore((state) => state.setUser);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser: FirebaseAuthTypes.User) => {
			setUser(currentUser);
		});

		return () => unsubscribe();
	}, []);

	return <>{children}</>;
};
