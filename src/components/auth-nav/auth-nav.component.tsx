import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import {
	NAVIGATION_KEYS,
	RootStackParamList,
} from '../../navigation';
import { COLORS } from '../../enums';
import { useThemeStore } from '../../store';
import { styles } from './auth-nav.styles';

type RedirectProps = {
	redirectText: string;
	linkText: string;
	navigationTarget: NAVIGATION_KEYS.LOGIN | NAVIGATION_KEYS.SIGNUP;
};

export const AuthNav: React.FC<RedirectProps> = ({
	redirectText,
	linkText,
	navigationTarget,
}) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const { theme } = useThemeStore();
	return (
		<View style={styles.container_link}>
			<Text style={[styles.text, {color: COLORS[theme].text_primary}]}>{redirectText}</Text>
			<TouchableOpacity onPress={() => navigation.navigate(navigationTarget)}>
				<Text style={[styles.linkText, {color: COLORS[theme].background_green}]}>{linkText}</Text>
			</TouchableOpacity>
		</View>
	);
};
