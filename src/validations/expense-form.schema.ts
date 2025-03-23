import * as yup from 'yup';
import { Messages } from '../constants';

export const expenseFormSchema = yup.object().shape({
	title: yup.string().required(Messages.REQUIRED),
	category: yup.string().required(Messages.REQUIRED),
	amount: yup
	.number()
	.nullable()
		.typeError(Messages.INVALID_NUMBER)
		.positive(Messages.POSITIVE_NUMBER)
		.required(Messages.REQUIRED),
	date: yup.date().required(Messages.REQUIRED),
});

export type ExpenseFormValues = yup.InferType<typeof expenseFormSchema>;
