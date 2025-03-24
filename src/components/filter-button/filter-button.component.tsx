import { Text, TouchableOpacity } from 'react-native';

import { useThemeStore } from '../../store';
import { COLORS } from '../../enums';
import { styles } from './filter-button.styles';

type FilterButtonProps = {
	label: string;
	setPeriod: () => void;
};

export const FilterButton: React.FC<FilterButtonProps> = ({label, setPeriod}) => {
	const { theme } = useThemeStore();

	return (
		<TouchableOpacity style={[styles.button, {backgroundColor: COLORS[theme].background_green}]} onPress={() => setPeriod()}>
			<Text style={[styles.button_text, {color: COLORS[theme].white}]}>{label}</Text>
		</TouchableOpacity>
	);
};
