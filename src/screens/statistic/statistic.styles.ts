import { StyleSheet } from 'react-native';
import { FONTS } from '../../enums';

export const styles = StyleSheet.create({
    chart_container: {
        alignItems: 'center',
        marginTop: 50,
    },
    legend_container: {
        marginTop: 40,
        paddingLeft: 10,
    },
    legend_item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    legend_color: {
        width: 20,
        height: 20,
        borderRadius: 5,
        marginRight: 10,
    },
    legend_text: {
        fontSize: 14,
        fontFamily: FONTS.POPPINS_MEDIUM,
    },
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
    text: {
		fontFamily: FONTS.POPPINS_SEMIBOLD,
		alignSelf: 'center',
		marginBlockStart: '30%',
		fontSize: 16,
	},
});
