import { NavigationProp, useNavigation } from '@react-navigation/native';

import { Layout, Header, ExpenseForm } from '../../components';
import { NAVIGATION_KEYS, RootStackParamList } from '../../navigation';
import { ExpenseFormValues } from '../../validations';
import { ExpenseService } from '../../services';
import { useAuthStore } from '../../store';

export const AddExpenseScreen: React.FC = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const userId = useAuthStore(store => store.user!.uid);

	const handleSubmit = async(data: ExpenseFormValues) => {
		const newExpense = { ...data, userId };
		await ExpenseService.create(newExpense);
		navigation.navigate(NAVIGATION_KEYS.EXPENSES);
	};

	return (
		<Layout isScrollable={false}>
			<Header title="Add Expanse" showBackButton />
			<ExpenseForm onSubmit={handleSubmit} submitButtonText={'Add'}/>
		</Layout>
	);
};
