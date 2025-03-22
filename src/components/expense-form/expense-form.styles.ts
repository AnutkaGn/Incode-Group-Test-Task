import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../enums';

export const styles = StyleSheet.create({
    container: {
        marginBlockStart: 25,
    },
    text: {
        marginBottom: 6,
        fontSize: 14,
        color: COLORS.text_secondary,
        fontFamily: FONTS.POPPINS_MEDIUM,
    },
    selector: {
        borderColor: COLORS.border,
        borderWidth: 1,
        borderRadius: 10,
        marginBlockEnd: 25,
    },
    date_picker: {
        alignSelf: 'center',
    },
});
