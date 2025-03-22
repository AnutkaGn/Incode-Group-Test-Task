import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../enums';

export const styles = StyleSheet.create({
	title: {
		fontFamily: FONTS.ROBOTO_MONO_SEMIBOLD,
		fontSize: 27,
		textAlign: 'center',
		marginBottom: 50,
		marginTop: 100,
		color: COLORS.background_green,
	},
});
