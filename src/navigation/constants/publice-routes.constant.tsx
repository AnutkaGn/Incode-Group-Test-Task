import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NAVIGATION_KEYS, RootStackParamList, SCREEN_OPTIONS } from '../';
import { LoginScreen, SignUpScreen } from '../../screens';

const PubliceStack = createNativeStackNavigator<RootStackParamList>();

export const PUBLICE_SCREENS = (
	<>
		<PubliceStack.Screen
			name={NAVIGATION_KEYS.LOGIN}
			component={LoginScreen}
			options={SCREEN_OPTIONS}
		/>
		<PubliceStack.Screen
			name={NAVIGATION_KEYS.SIGNUP}
			component={SignUpScreen}
			options={SCREEN_OPTIONS}
		/>
	</>
);
