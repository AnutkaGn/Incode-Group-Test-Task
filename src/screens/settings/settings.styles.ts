import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../enums';

export const styles = StyleSheet.create({
	logout_text: {
		color: COLORS.danger,
		fontFamily: FONTS.POPPINS_REGULAR,
		fontSize: 16,
		marginBlockStart: 24,
		marginLeft: 10,
	},
});
