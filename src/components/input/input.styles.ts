import { StyleSheet } from 'react-native';
import { FONTS } from '../../enums';

export const styles = StyleSheet.create({
	container: {
		position: 'relative',
		paddingBottom: 20,
		marginBottom: 10,
	},
	input: {
		width: '100%',
		paddingHorizontal: 16,
		paddingVertical: 12,
		fontSize: 16,
		borderWidth: 1,
		borderRadius: 10,
		fontFamily: FONTS.POPPINS_REGULAR,
	},
	label: {
		marginBottom: 6,
		fontSize: 14,
		fontFamily: FONTS.POPPINS_MEDIUM,
	},
	focused: {
		borderWidth: 1,
	},
	wrong: {
		borderWidth: 1,
	},
	correct: {
		borderWidth: 1,
	},
	icon: {
		fontSize: 27,
	},
	icon_container: {
		position: 'absolute',
		right: 15,
		top: 45,
	},
});
