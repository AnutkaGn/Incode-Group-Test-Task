import { StyleSheet } from 'react-native';
import { FONTS } from '../../../enums';

export const styles = StyleSheet.create({
	item: {
		flexDirection: 'column',
		paddingHorizontal: 16,
		paddingVertical: 8,
		borderRadius: 8,
		marginBlockEnd: 16,
	},
	date_container: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		height: 48,
	},
	day: {
		fontSize: 32,
		fontFamily: FONTS.POPPINS_BOLD,
		marginRight: 8,
		alignSelf: 'flex-start',
	},
	date_details: {
		flexDirection: 'column',
		alignItems: 'flex-start',
		marginBlockStart:8,
	},
	weekday: {
		fontSize: 12,
		fontWeight: 'bold',
	},
	month_year: {
		fontFamily: FONTS.POPPINS_REGULAR,
		fontSize: 10,
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		fontFamily: FONTS.POPPINS_REGULAR,
		fontSize: 14,
	},
	category: {
		fontFamily: FONTS.POPPINS_REGULAR,
		fontSize: 14,
	},
	amount_container: {
		alignItems: 'flex-end',
	},
	amount: {
		fontSize: 20,
		fontFamily: FONTS.POPPINS_SEMIBOLD,
	},
	time: {
		fontFamily: FONTS.POPPINS_REGULAR,
		fontSize: 14,
		marginTop: 4,
	},
});
