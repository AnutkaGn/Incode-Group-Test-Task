import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { useThemeStore } from '../../store';
import { COLORS } from '../../enums';
import { styles } from './loader.styles';

export const Loader: React.FC = () => {
	const { theme } = useThemeStore();

	return (
		<View style={[styles.container, {backgroundColor: COLORS[theme].background}]}>
			<ActivityIndicator size={60} color={COLORS[theme].background_green} />
		</View>
	);
};
