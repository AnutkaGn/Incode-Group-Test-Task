import { Input, Button } from '../';
import { styles } from './login-form.styles';
import { useForm } from 'react-hook-form';
import { LoginFormValues } from '../../validations';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NAVIGATION_KEYS, RootStackParamList } from '../../navigation';

export const LoginForm: React.FC = () => {
	const { control /*handleSubmit*/ } = useForm<LoginFormValues>({
		mode: 'all',
		reValidateMode: 'onChange',
	});
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const handleSubmit = () => {
		navigation.navigate(NAVIGATION_KEYS.EXPENSES);
	};
	return (
		<>
			<Input name="email" control={control} defaultValue="" label="Email" />
			<Input
				name="password"
				control={control}
				defaultValue=""
				label="Password"
				secureTextEntry={true}
			/>
			<Button
				title="Sign in"
				onPress={handleSubmit}
				buttonStyle={styles.button}
			/>
		</>
	);
};
