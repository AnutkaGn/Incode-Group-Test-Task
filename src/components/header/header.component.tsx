import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { styles } from './header.styles';
import { BackArrowIcon } from '../../assets/icons/back-arrow';
import { TrashBinIcon } from '../../assets/icons/trash-bin';
import {
	NAVIGATION_KEYS,
	type RootStackParamList,
} from '../../navigation';
import { SettingsIcon } from '../../assets/icons/settings';

interface HeaderProps {
	title: string;
	showBackButton?: boolean;
	onBackPress?: () => void;
	showDeleteIcon?: boolean;
	onDeletePress?: () => void;
	showSettingsButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
	title,
	showBackButton = false,
	onBackPress,
	showDeleteIcon = false,
	onDeletePress,
	showSettingsButton = false,
}) => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();


	return (
		<View style={styles.container}>
			{showBackButton && (
				<TouchableOpacity
					onPress={onBackPress || navigation.goBack}
					style={styles.icon_button}
				>
					<BackArrowIcon />
				</TouchableOpacity>
			)}
			{showSettingsButton && (
				<TouchableOpacity
					onPress={() => navigation.navigate(NAVIGATION_KEYS.SETTINGS)}
					style={styles.icon_button}
				>
					<SettingsIcon />
				</TouchableOpacity>
			)}

			<Text style={styles.title}>{title}</Text>

			{showDeleteIcon && (
				<TouchableOpacity onPress={onDeletePress} style={styles.icon_button}>
					<TrashBinIcon/>
				</TouchableOpacity>
			)}
		</View>
	);
};
