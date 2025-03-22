import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavContainer } from '../nav-container';
import { type RootStackParamList } from '../../types';
import { PRIVATE_SCREENS, PUBLICE_SCREENS } from '../../constants';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
	//const isAuth = useAuthStore((store) => store.isAuth);
	//const isAuth = false;
	return (
		<NavContainer>
			<Stack.Navigator>
				{PRIVATE_SCREENS || PUBLICE_SCREENS}
			</Stack.Navigator>
		</NavContainer>
	);
};
