import { StyleSheet } from 'react-native';
import { FONTS } from '../../enums';

export const styles = StyleSheet.create({
	list_container: {
		marginBlockStart: 20,
		height: '85%',
	},
	text: {
		fontFamily: FONTS.POPPINS_SEMIBOLD,
		alignSelf: 'center',
		marginBlockStart: '30%',
		fontSize: 16,
	},
});
