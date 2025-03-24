import { Text } from 'react-native';

import { AuthNav, Layout, SignUpForm } from '../../components';
import { NAVIGATION_KEYS } from '../../navigation';
import { COLORS } from '../../enums';
import { useThemeStore } from '../../store';
import { styles } from './sign-up.styles';

export const SignUpScreen: React.FC = () => {
	const { theme } = useThemeStore();

	return (
		<Layout>
			<Text style={[styles.title, {color: COLORS[theme].background_green}]}>Sign Up</Text>
			<SignUpForm />
			<AuthNav
				redirectText="Have you already registered? "
				linkText="Sign In"
				navigationTarget={NAVIGATION_KEYS.LOGIN}
			/>
		</Layout>
	);
};
