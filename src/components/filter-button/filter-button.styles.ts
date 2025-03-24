import { StyleSheet } from 'react-native';
import { FONTS } from '../../enums';

export const styles = StyleSheet.create({
	button_container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
	},
	button:{
		height: 42,
		width: 100,
		padding: 8,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 20,
	},
	button_text: {
		fontSize: 16,
		fontFamily: FONTS.POPPINS_REGULAR,
	},
});
