import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../../enums';

export const styles = StyleSheet.create({
	item: {
		flexDirection: 'column',
		backgroundColor: COLORS.white,
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 8,
		marginBlockEnd: 16,
	},
	dateContainer: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		height: 48,
	},
	day: {
		fontSize: 32,
		fontFamily: FONTS.POPPINS_BOLD,
		color: COLORS.background_green,
		marginRight: 8,
		alignSelf: 'flex-start',
	},
	dateDetails: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		marginBlockStart:8,
	},
	weekday: {
		fontSize: 12,
		fontWeight: 'bold',
		color: COLORS.text_secondary,
	},
	monthYear: {
		fontFamily: FONTS.POPPINS_REGULAR,
		fontSize: 10,
		color: COLORS.text_secondary,
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		fontFamily: FONTS.POPPINS_REGULAR,
		color: COLORS.text_secondary,
		fontSize: 14,
	},
	category: {
		fontFamily: FONTS.POPPINS_REGULAR,
		fontSize: 14,
		color: COLORS.background_inactive,
	},
	amountContainer: {
		alignItems: 'flex-end',
	},
	amount: {
		fontSize: 20,
		fontFamily: FONTS.POPPINS_SEMIBOLD,
		color: COLORS.text_primary,
	},
	time: {
		fontFamily: FONTS.POPPINS_REGULAR,
		fontSize: 14,
		color: COLORS.text_secondary,
		marginTop: 4,
	},
});
