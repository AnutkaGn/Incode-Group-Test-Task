import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { BackArrowIcon } from '../../assets/icons/back-arrow';
import { TrashBinIcon } from '../../assets/icons/trash-bin';
import { AnalyticsIcon } from '../../assets/icons/analytics';
import { SunIcon } from '../../assets/icons/sun';
import { MoonIcon } from '../../assets/icons/moon';
import { SettingsIcon } from '../../assets/icons/settings';
import {
	NAVIGATION_KEYS,
	type RootStackParamList,
} from '../../navigation';
import { useThemeStore } from '../../store';
import { COLORS, THEME } from '../../enums';
import { styles } from './header.styles';

interface HeaderProps {
	title: string;
	showBackButton?: boolean;
	onBackPress?: () => void;
	showDeleteIcon?: boolean;
	onDeletePress?: () => void;
	showSettingsButton?: boolean;
	showThemeToggle?: boolean;
	showStatisticButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
	title,
	showBackButton = false,
	onBackPress,
	showDeleteIcon = false,
	onDeletePress,
	showSettingsButton = false,
	showThemeToggle = false,
	showStatisticButton = false,
}) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const {theme, setTheme} = useThemeStore();
	const isDark = theme === THEME.dark;

	const onThemeToggle = () => {
		setTheme();
	};

	return (
		<View style={[styles.container, {backgroundColor: COLORS[theme].background}]}>
			{showBackButton && (
				<TouchableOpacity
					onPress={onBackPress || navigation.goBack}
					style={styles.icon_button}
				>
					<BackArrowIcon color={COLORS[theme].background_green}/>
				</TouchableOpacity>
			)}
			{showSettingsButton && (
				<TouchableOpacity
					onPress={() => navigation.navigate(NAVIGATION_KEYS.SETTINGS)}
					style={styles.icon_button}
				>
					<SettingsIcon color={COLORS[theme].text_primary}/>
				</TouchableOpacity>
			)}

			<Text style={[styles.title, {color: COLORS[theme].background_green}]}>{title}</Text>

			{showDeleteIcon && (
				<TouchableOpacity onPress={onDeletePress} style={styles.icon_button}>
					<TrashBinIcon/>
				</TouchableOpacity>
			)}
			{showThemeToggle && (
				<TouchableOpacity onPress={onThemeToggle} style={styles.icon_button}>
					{isDark ? <SunIcon color={COLORS[theme].text_primary}/> : <MoonIcon color={COLORS[theme].text_primary}/>}
				</TouchableOpacity>
			)}
			{showStatisticButton && (
				<TouchableOpacity
					onPress={() => navigation.navigate(NAVIGATION_KEYS.STATISTIC)}
					style={styles.icon_button}
				>
					<AnalyticsIcon color={COLORS[theme].text_primary}/>
				</TouchableOpacity>
			)}
		</View>
	);
};
