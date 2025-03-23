import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../enums';
import { useThemeStore } from '../../store';

const theme = useThemeStore.getState().theme;

export const styles = StyleSheet.create({
    chartContainer: {
        alignItems: 'center',
        marginTop: 50,
    },
    legendContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    legendColor: {
        width: 20,
        height: 20,
        borderRadius: 10,
        marginRight: 10,
    },
    legendText: {
        fontSize: 16,
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    button:{
        backgroundColor: COLORS[theme].background_green,
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
        color: COLORS[theme].white,
        fontSize: 16,
        fontFamily: FONTS.POPPINS_REGULAR,
    },
});
