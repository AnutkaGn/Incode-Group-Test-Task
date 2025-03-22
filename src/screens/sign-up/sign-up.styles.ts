import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../enums';

export const styles = StyleSheet.create({
	title: {
		fontFamily: FONTS.ROBOTO_MONO_SEMIBOLD,
		fontSize: 20,
		textAlign: 'center',
		marginBottom: 20,
		marginBlockStart: 40,
		color: COLORS.background_green,
	},
});
