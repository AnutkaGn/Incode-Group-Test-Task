import { Input, Button } from '../';
import { signUpFormSchema, SignUpFormValues } from '../../validations';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { register } from '../../services';
import { Alert } from 'react-native';

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
			await register({
				username: data.fullName,
				email: data.email,
				password: data.password,
			});
			Alert.alert('Success', 'User registered successfully!');
		} catch (error) {
			Alert.alert('Error', 'Registration failed');
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
