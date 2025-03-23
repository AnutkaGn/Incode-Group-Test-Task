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
} from 'firebase/firestore';

import { Expense } from '../types';
import { handleFirestoreError, mapExpense } from '../utils';

const db = getFirestore();

export const ExpenseService = {
    async getAll(userId: string): Promise<Expense[]> {
        try {
            const expensesRef = collection(db, 'expenses');
            const q = query(expensesRef, where('userId', '==', userId));
            const snapshot = await getDocs(q);

            return snapshot.docs.map(item => mapExpense({ id: item.id, ...item.data() }));
        } catch (error: unknown) {
            throw new Error(handleFirestoreError(error, 'Failed to fetch expenses.'));
        }
    },

    async getById(id: string): Promise<Expense | null> {
        try {
            const expenseRef = doc(db, 'expenses', id);
            const docSnap = await getDoc(expenseRef);

            return docSnap.exists() ? mapExpense({ id: docSnap.id, ...docSnap.data() }) : null;
        } catch (error: unknown) {
            throw new Error(handleFirestoreError(error, 'Failed to fetch the expense.'));
        }
    },

    async create(expense: Omit<Expense, 'id'>): Promise<void> {
        try {
            await addDoc(collection(db, 'expenses'), expense);
        } catch (error: unknown) {
            throw new Error(handleFirestoreError(error, 'Failed to create the expense.'));
        }
    },

    async update(id: string, updates: Partial<Omit<Expense, 'id'>>): Promise<void> {
        try {
            await updateDoc(doc(db, 'expenses', id), updates);
        } catch (error: unknown) {
            throw new Error(handleFirestoreError(error, 'Failed to update the expense.'));
        }
    },

    async delete(id: string): Promise<void> {
        try {
            await deleteDoc(doc(db, 'expenses', id));
        } catch (error: unknown) {
            throw new Error(handleFirestoreError(error, 'Failed to delete the expense.'));
        }
    },
};
