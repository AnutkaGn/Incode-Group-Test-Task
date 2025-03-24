import { StyleSheet } from 'react-native';
import { FONTS } from '../../enums';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: 20,
		paddingVertical: 12,
		margin: -20,
	},
	icon_button: {
		paddingVertical: 8,
	},
	title: {
		fontSize: 24,
		fontFamily: FONTS.POPPINS_BOLD,
		textAlign: 'center',
		flex: 1,
	},
});
