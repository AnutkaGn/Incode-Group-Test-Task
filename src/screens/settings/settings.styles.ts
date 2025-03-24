import { StyleSheet } from 'react-native';
import { FONTS } from '../../enums';

export const styles = StyleSheet.create({
	logout:{
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center',
		marginBlockStart: '30%',
	},
	logout_text: {
		fontFamily: FONTS.POPPINS_REGULAR,
		fontSize: 16,
		marginLeft: 10,
	},
});
