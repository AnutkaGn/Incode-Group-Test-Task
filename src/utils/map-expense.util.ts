import { Expense } from '../types/expense.types';

export const mapExpense = (expense: any): Expense => ({
    ...expense,
    date: new Date(expense.date.seconds * 1000),
});
