import React from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';

import { NAVIGATION_KEYS, RootStackParamList } from '../../navigation';
import { LoginFormValues } from '../../validations';
import { Input, Button } from '../';
import { AuthService } from '../../services';
import { Messages } from '../../constants';
import { styles } from './login-form.styles';

export const LoginForm: React.FC = () => {
	const { control, handleSubmit } = useForm<LoginFormValues>({
		mode: 'all',
		reValidateMode: 'onChange',
	});
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const onSubmit = async (data: LoginFormValues) => {
		try {
			await AuthService.login(data);
			navigation.navigate(NAVIGATION_KEYS.EXPENSES);
		} catch (error: unknown) {
			const errorMessage = error instanceof Error ? error.message : Messages.UNKNOWN_ERROR;
			Alert.alert('Login Error', errorMessage);
		}
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
				onPress={handleSubmit(onSubmit)}
				buttonStyle={styles.button}
			/>
		</>
	);
};
