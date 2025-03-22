import { Text } from 'react-native';
import { AuthNav, Layout, LoginForm } from '../../components';
import { NAVIGATION_KEYS } from '../../navigation';
import { styles } from './login.styles';

export const LoginScreen: React.FC = () => {
	return (
		<Layout>
			<Text style={styles.title}>My Expenses</Text>
			<LoginForm />
			<AuthNav
				redirectText="Don't have an account? "
				linkText="Sign Up"
				navigationTarget={NAVIGATION_KEYS.SIGNUP}
			/>
		</Layout>
	);
};
