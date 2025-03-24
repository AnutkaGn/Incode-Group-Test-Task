import { Text } from 'react-native';

import { AuthNav, Layout, LoginForm } from '../../components';
import { NAVIGATION_KEYS } from '../../navigation';
import { COLORS } from '../../enums';
import { useThemeStore } from '../../store';
import { styles } from './login.styles';

export const LoginScreen: React.FC = () => {
	const { theme } = useThemeStore();

	return (
		<Layout>
			<Text style={[styles.title, {color: COLORS[theme].background_green}]}>My Expenses</Text>
			<LoginForm />
			<AuthNav
				redirectText="Don't have an account? "
				linkText="Sign Up"
				navigationTarget={NAVIGATION_KEYS.SIGNUP}
			/>
		</Layout>
	);
};
