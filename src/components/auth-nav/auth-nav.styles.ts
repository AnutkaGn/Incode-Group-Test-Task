import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../enums';

export const styles = StyleSheet.create({
	container_link: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20,
	},
	text: {
		fontFamily: FONTS.POPPINS_REGULAR,
		fontSize: 16,
		color: COLORS.text_primary,
	},
	linkText: {
		fontSize: 16,
		fontFamily: FONTS.POPPINS_SEMIBOLD,
		color: COLORS.background_green,
		textDecorationLine: 'none',
	},
});
