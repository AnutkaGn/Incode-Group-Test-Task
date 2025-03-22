import { Text } from 'react-native';
import { styles } from './sign-up.styles';
import { AuthNav, Layout, SignUpForm } from '../../components';
import { NAVIGATION_KEYS } from '../../navigation';

export const SignUpScreen: React.FC = () => {
	return (
		<Layout>
			<Text style={styles.title}>Sign Up</Text>
			<SignUpForm />
			<AuthNav
				redirectText="Have you already registered? "
				linkText="Sign In"
				navigationTarget={NAVIGATION_KEYS.LOGIN}
			/>
		</Layout>
	);
};
