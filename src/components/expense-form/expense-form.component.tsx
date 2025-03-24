import { useState } from 'react';
import { Text, View } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import { Controller, useForm } from 'react-hook-form';

import { Input, Button } from '../';
import { expenseFormSchema, ExpenseFormValues } from '../../validations';
import { COLORS } from '../../enums';
import { useThemeStore } from '../../store';
import { Categories } from '../../constants';
import { styles } from './expense-form.styles';

type ExpenseFormProps = {
    initialValues?: ExpenseFormValues;
    onSubmit: (data: ExpenseFormValues) => void;
    submitButtonText?: string;
}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({
    initialValues = { title: '', category: '', amount: 0, date: new Date() },
    onSubmit,
    submitButtonText = 'Submit',
}) => {
    const [open, setOpen] = useState(false);
    const {
        handleSubmit,
        control,
        formState: { isValid },
    } = useForm<ExpenseFormValues>({
        mode: 'onChange',
        resolver: yupResolver(expenseFormSchema),
        defaultValues: initialValues,
    });
    const { theme } = useThemeStore();

    return (
        <>
            <View style={styles.container}>
                <Input
                    name="title"
                    control={control}
                    label="Title"
                    defaultValue={initialValues.title || ''}
                />
                <Text style={[styles.text, {color: COLORS[theme].text_secondary}]}>Category</Text>
                <Controller
                    name="category"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <DropDownPicker
                            items={Categories}
                            placeholder=""
                            open={open}
                            setOpen={setOpen}
                            value={value}
                            setValue={(callback) => {
                                const selectedValue = callback(value);
                                onChange(selectedValue);
                            }}
                            style={[styles.selector, {
                                borderColor: COLORS[theme].border,
                                backgroundColor: COLORS[theme].backround_input,

                            }]}
                            dropDownContainerStyle={{
                                backgroundColor: COLORS[theme].backround_input,
                            }}
                            textStyle={{
                                color: COLORS[theme].text_primary,
                            }}
                        />
                    )}
                />

                <Input
                    name="amount"
                    control={control}
                    label="Amount"
                    defaultValue={initialValues.amount || 0}
                />

                <Text style={[styles.text, {color: COLORS[theme].text_secondary}]}>Date and Time</Text>
                <Controller
                    name="date"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <DatePicker
                            date={value}
                            onDateChange={onChange}
                            mode="datetime"
                            theme={theme}
                            locale="en"
                            is24hourSource="locale"
                            style={styles.date_picker}
                        />
                    )}
                />
            </View>

            <Button
                onPress={handleSubmit(onSubmit)}
                title={submitButtonText}
                disabled={!isValid}
            />
        </>
    );
};
