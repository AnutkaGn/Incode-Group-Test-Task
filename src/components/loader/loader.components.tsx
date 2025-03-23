import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { COLORS } from '../../enums';
import { styles } from './loader.styles';

export const Loader: React.FC = () => {
	return (
		<View style={styles.container}>
			<ActivityIndicator size={60} color={COLORS.background_green} />
		</View>
	);
};
