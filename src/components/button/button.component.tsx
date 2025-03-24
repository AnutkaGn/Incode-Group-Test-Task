import {
	TouchableOpacity,
	Text,
	ViewStyle,
	TextStyle,
	View,
} from 'react-native';

import { COLORS } from '../../enums';
import { useThemeStore } from '../../store';
import { styles } from './button.styles';

type ButtonProps = {
	onPress: () => void;
	title: React.ReactNode | string;
	buttonStyle?: ViewStyle;
	textStyle?: TextStyle;
	disabled?: boolean;
};

export const Button = ({
	onPress,
	title,
	buttonStyle,
	textStyle,
	disabled = false,
}: ButtonProps) => {
	const { theme } = useThemeStore();
	return (
		<View style={styles.sticky_container}>
			<TouchableOpacity
				onPress={!disabled ? onPress : undefined}
				style={[styles.button, buttonStyle, disabled ? {backgroundColor: COLORS[theme].background_inactive} : {backgroundColor: COLORS[theme].background_green}]}
				activeOpacity={disabled ? 1 : 0.7}
			>
				{typeof title === 'string' ? (
					<Text style={[styles.button_text, textStyle, {color: COLORS[theme].white}]}>{title}</Text>
				) : (
					title
				)}
			</TouchableOpacity>
		</View>
	);
};
