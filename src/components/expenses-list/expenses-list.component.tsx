import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Text, View} from 'react-native';

import { Loader } from '../loader';
import { ExpenseItem } from './expense-item/expense-item.component';
import { ExpenseService } from '../../services';
import { useAuthStore } from '../../store';
import { Expense } from '../../types';
import { Messages } from '../../constants';
import { styles } from './expenses-list.styles';

export const ExpenseList: React.FC = () => {
	const userId = useAuthStore(store => store.user!.uid);
	const [expenses, setExpenses] = useState<Expense[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const fetchExpenses = async () => {
			setLoading(true);
			try {
				const expensesData = await ExpenseService.getAll(userId);
				setExpenses(expensesData);
			} catch (error: unknown) {
				const errorMessage = error instanceof Error ? error.message : Messages.UNKNOWN_ERROR;
				Alert.alert('Error fetching expense:', errorMessage);
			} finally {
				setLoading(false);
			}
		};

		fetchExpenses();
	}, [userId]);

	const renderEmptyList = () => (
		<Text style={styles.text}>Add the first expense.</Text>
	);

	if (loading) {
		return <Loader/>;
	}

	return (
		<View style={styles.list_container}>
			<FlatList
				data={expenses}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => <ExpenseItem expense={item} />}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={renderEmptyList}
			/>
		</View>
	);
};
