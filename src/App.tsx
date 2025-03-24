import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RootNavigator } from './navigation/components/root-navigator';
import { AuthProvider } from './components';
import { initializeApp } from 'firebase/app';
import Config from 'react-native-config';

initializeApp({
	apiKey: Config.API_KEY,
	authDomain: Config.AUTH_DOMAIN,
	projectId: Config.PROJECT_ID,
	storageBucket: Config.STORAGE_BUCKET,
	messagingSenderId: Config.MESSAGING_SENDER_ID,
	appId: Config.APP_ID,
	measurementId: Config.MEASUREMENT_ID,
});

export const App = () => {
	return (
		<SafeAreaProvider>
			<AuthProvider>
				<RootNavigator />
			</AuthProvider>
		</SafeAreaProvider>
	);
};

