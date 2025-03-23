import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Loader } from '../../../components';
import { NavContainer } from '../nav-container';
import { type RootStackParamList } from '../../types';
import { PRIVATE_SCREENS, PUBLICE_SCREENS } from '../../constants';
import { useAuthStore } from '../../../store';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
	const { user, isLoading } = useAuthStore();

	if (isLoading) {
		return <Loader/>;
	}

	return (
		<NavContainer>
			<Stack.Navigator>
				{user ? PRIVATE_SCREENS : PUBLICE_SCREENS}
			</Stack.Navigator>
		</NavContainer>
	);
};
