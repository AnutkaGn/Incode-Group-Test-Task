import {
    getFirestore,
    collection,
    getDocs,
    query,
    where,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
    getDoc,
    Timestamp,
    orderBy,
} from 'firebase/firestore';

import { Expense } from '../types';
import { TIME_PERIOD, TimePeriod } from '../enums';
import { handleFirestoreError, mapExpense } from '../utils';
import { Messages } from '../constants';

const db = getFirestore();

export const ExpenseService = {
    async getAll(userId: string): Promise<Expense[]> {
        try {
            const expensesRef = collection(db, 'expenses');
            const q = query(
                expensesRef,
                where('userId', '==', userId),
                orderBy('date', 'desc'),
            );
            const snapshot = await getDocs(q);

            return snapshot.docs.map(item => mapExpense({ id: item.id, ...item.data() }));
        } catch (error: unknown) {
            throw new Error(handleFirestoreError(error, Messages.FETCH_EXPENSES_FAILED));
        }
    },

    async getById(id: string): Promise<Expense | null> {
        try {
            const expenseRef = doc(db, 'expenses', id);
            const docSnap = await getDoc(expenseRef);

            return docSnap.exists() ? mapExpense({ id: docSnap.id, ...docSnap.data() }) : null;
        } catch (error: unknown) {
            throw new Error(handleFirestoreError(error, Messages.FETCH_EXPENSE_FAILED));
        }
    },

    async getByTimePeriod(userId: string, period: TimePeriod): Promise<Expense[]> {
        try {
            const expensesRef = collection(db, 'expenses');
            const currentDate = new Date();
            const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
            const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
            const startOfDay = new Date(currentDate.setHours(0, 0, 0, 0));

            let startDate: Date;

            switch (period) {
                case TIME_PERIOD.year:
                    startDate = startOfYear;
                    break;
                case TIME_PERIOD.month:
                    startDate = startOfMonth;
                    break;
                case TIME_PERIOD.day:
                    startDate = startOfDay;
                    break;
                default:
                    throw new Error(Messages.INVALID_PERIOD);
            }

            const q = query(
                expensesRef,
                where('userId', '==', userId),
                where('date', '>=', Timestamp.fromDate(startDate)),
            );

            const snapshot = await getDocs(q);
            return snapshot.docs.map(item => mapExpense({ id: item.id, ...item.data() }));
        } catch (error: unknown) {
            throw new Error(handleFirestoreError(error, Messages.FETCH_EXPENSES_FAILED));
        }
    },

    async create(expense: Omit<Expense, 'id'>): Promise<void> {
        try {
            await addDoc(collection(db, 'expenses'), expense);
        } catch (error: unknown) {
            throw new Error(handleFirestoreError(error, Messages.CREATE_EXPENSE_FAILED));
        }
    },

    async update(id: string, updates: Partial<Omit<Expense, 'id'>>): Promise<void> {
        try {
            await updateDoc(doc(db, 'expenses', id), updates);
        } catch (error: unknown) {
            throw new Error(handleFirestoreError(error, Messages.UPDATE_EXPENSE_FAILED));
        }
    },

    async delete(id: string): Promise<void> {
        try {
            await deleteDoc(doc(db, 'expenses', id));
        } catch (error: unknown) {
            throw new Error(handleFirestoreError(error, Messages.DELETE_EXPENSE_FAILED));
        }
    },
};
