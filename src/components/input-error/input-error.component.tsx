import { StyleProp, Text, TextStyle } from 'react-native';
import { Control, FieldValues, useFormState } from 'react-hook-form';

import { COLORS } from '../../enums';
import { useThemeStore } from '../../store';
import { styles } from './input-error.styles';

type InputErrorProps<T extends FieldValues> = {
	control: Control<T>;
	field: string;
	extraErrorStyles?: StyleProp<TextStyle>;
};

export function InputError<T extends FieldValues>({
	control,
	field,
	extraErrorStyles,
}: InputErrorProps<T>) {
	const { errors } = useFormState<T>({
		control,
	});
	const { theme } = useThemeStore();

	return errors[field]?.message ? (
		<Text style={[styles.error, extraErrorStyles, {color: COLORS[theme].danger}]}>
			{String(errors[field]?.message)}
		</Text>
	) : null;
}
