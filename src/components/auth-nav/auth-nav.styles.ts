import { StyleSheet } from 'react-native';
import { FONTS } from '../../enums';

export const styles = StyleSheet.create({
	container_link: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20,
	},
	text: {
		fontFamily: FONTS.POPPINS_REGULAR,
		fontSize: 16,
	},
	linkText: {
		fontSize: 16,
		fontFamily: FONTS.POPPINS_SEMIBOLD,
		textDecorationLine: 'none',
	},
});
