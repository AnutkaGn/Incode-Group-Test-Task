import React, { useState } from 'react';
import { Input, Button } from '../';
import { expenseFormSchema, ExpenseFormValues } from '../../validations';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './expense-form.styles';
import DatePicker from 'react-native-date-picker';

const categories = [
  { label: 'Food', value: 'Food' },
  { label: 'Transport', value: 'Transport' },
  { label: 'Other', value: 'Other' },
];

interface ExpenseFormProps {
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
    mode: 'onSubmit',
    resolver: yupResolver(expenseFormSchema),
    defaultValues: initialValues,
  });

  return (
    <>
      <View style={styles.container}>
        <Input
          name="title"
          control={control}
          label="Title"
          defaultValue={initialValues.title || ''}
        />
        <Text style={styles.text}>Category</Text>
        <Controller
          name="category"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DropDownPicker
              items={categories}
              placeholder=""
              open={open}
              setOpen={setOpen}
              value={value}
              setValue={(callback) => {
                const selectedValue = callback(value);
                onChange(selectedValue);
              }}
              style={styles.selector}
            />
          )}
        />

        <Input
          name="amount"
          control={control}
          label="Amount"
          defaultValue={initialValues.amount || 0}
        />

        <Text style={styles.text}>Date and Time</Text>
        <Controller
          name="date"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              date={value}
              onDateChange={onChange}
              mode="datetime"
              theme="light"
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
