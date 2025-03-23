import { Alert } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { Input, Button } from '../';
import { signUpFormSchema, SignUpFormValues } from '../../validations';
import { AuthService } from '../../services';
import { Messages } from '../../constants';

export const SignUpForm = () => {
	const {
		control,
		handleSubmit,
		formState: { isValid },
	} = useForm<SignUpFormValues>({
		mode: 'all',
		reValidateMode: 'onChange',
		resolver: yupResolver(signUpFormSchema),
	});

	const onSubmit = async (data: SignUpFormValues) => {
		try {
			await AuthService.register({
				username: data.fullName,
				email: data.email,
				password: data.password,
			});
		} catch (error: unknown) {
			const errorMessage = error instanceof Error ? error.message : Messages.UNKNOWN_ERROR;
			Alert.alert('Sign Up Error', errorMessage);
		}
	};

	return (
		<>
			<Input name="email" control={control} defaultValue="" label="Email" />
			<Input
				name="fullName"
				control={control}
				defaultValue=""
				label="Full name"
			/>
			<Input
				name="password"
				control={control}
				defaultValue=""
				label="Password"
				secureTextEntry={true}
			/>
			<Input
				name="confirmPassword"
				control={control}
				defaultValue=""
				label="Confirm password"
				secureTextEntry={true}
			/>
			<Button
				onPress={handleSubmit(onSubmit)}
				title="Sign Up"
				disabled={!isValid}
			/>
		</>
	);
};
