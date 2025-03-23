import { useEffect, useState, useCallback } from 'react';
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Alert, Text } from 'react-native';

import { NAVIGATION_KEYS, RootStackParamList } from '../../navigation';
import { Layout, Header, ExpenseForm, Loader } from '../../components';
import { ExpenseFormValues } from '../../validations';
import { ExpenseService } from '../../services';
import { Expense } from '../../types';
import { Messages } from '../../constants';
import { styles } from './edit-expense.styles';

export const EditExpenseScreen: React.FC = () => {
	const {
		params: { id },
	} = useRoute<RouteProp<RootStackParamList, NAVIGATION_KEYS.EDIT_EXPENSE>>();
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	const [expense, setExpense] = useState<Expense | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchExpense = async () => {
			try {
				const expenseToEdit = await ExpenseService.getById(id);
				setExpense(expenseToEdit);
			} catch (error: unknown) {
				const errorMessage = error instanceof Error ? error.message : Messages.UNKNOWN_ERROR;
				Alert.alert('Error fetching expense:', errorMessage);
			} finally {
				setIsLoading(false);
			}
		};

		fetchExpense();
	}, [id]);

	const handleSubmit = useCallback(async (data: ExpenseFormValues) => {
		try {
		await ExpenseService.update(id, data);
		navigation.reset({
			index: 0,
			routes: [{name: NAVIGATION_KEYS.EXPENSES}],
		});
		} catch (error: unknown) {
			const errorMessage = error instanceof Error ? error.message : Messages.UNKNOWN_ERROR;
			Alert.alert('Error fetching expense:', errorMessage);
		}
	}, [id, navigation]);

	const handleDelete = useCallback(async () => {
		try {
			await ExpenseService.delete(id);
			navigation.reset({
				index: 0,
				routes: [{name: NAVIGATION_KEYS.EXPENSES}],
			});
		} catch (error: unknown) {
			const errorMessage = error instanceof Error ? error.message : Messages.UNKNOWN_ERROR;
			Alert.alert('Error fetching expense:', errorMessage);
		}
	}, [id, navigation]);

	return (
		<Layout isScrollable={false}>
			<Header title="Edit Expense" showBackButton showDeleteIcon onDeletePress={handleDelete} />
			{isLoading ? (
				<Loader/>
			) : expense ? (
				<ExpenseForm initialValues={expense} onSubmit={handleSubmit} submitButtonText="Save" />
			) : (
				<Text style={styles.text}>Expense not found.</Text>
			)}
		</Layout>
	);
};
