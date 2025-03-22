import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Layout, Header, ExpenseForm } from '../../components';
import { NAVIGATION_KEYS, RootStackParamList } from '../../navigation';
import { ExpenseFormValues } from '../../validations';

export const AddExpenseScreen: React.FC = () => {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const handleSubmit = (data: ExpenseFormValues) => {
		console.log(data);
		navigation.navigate(NAVIGATION_KEYS.EXPENSES);
	};
	return (
		<Layout isScrollable={false}>
			<Header title="Add Expanse" showBackButton />
			<ExpenseForm onSubmit={handleSubmit} submitButtonText={'Add'}/>
		</Layout>
	);
};
