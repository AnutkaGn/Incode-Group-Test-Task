import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { type FirebaseAuthTypes } from '@react-native-firebase/auth';


interface AuthState {
	user: FirebaseAuthTypes.User | null;
	setUser: (user: FirebaseAuthTypes.User | null) => void;
	isLoading: boolean;
	setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
	persist(
		(set, _get) => ({
			user: null,
			setUser: (user) => set({ user, isLoading: false }),
			isLoading: true,
			setLoading: (loading) => set({ isLoading: loading }),
		}),
		{
			name: 'auth-storage',
			storage: createJSONStorage(() => AsyncStorage),
		}
	)
);
