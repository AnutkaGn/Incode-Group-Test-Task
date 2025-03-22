import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { Layout, Header, ExpenseForm } from '../../components';
import { NAVIGATION_KEYS, RootStackParamList } from '../../navigation';
import { Expense } from '../../types/expense.types';
import { Text } from 'react-native';
import { ExpenseFormValues } from '../../validations';

const expenses: Expense[] = [
  {
    id: '1',
    date: new Date(2025, 2, 21, 14, 30),
    amount: 150,
    title: 'New dress and shoes and something very interesting',
    category: 'Clothes',
  },
  {
    id: '2',
    date: new Date(2025, 2, 20, 9, 0),
    amount: 50,
    title: 'Coffee',
    category: 'Food',
  },
  {
    id: '3',
    date: new Date(2025, 2, 19, 19, 45),
    amount: 200,
    title: 'Dinner',
    category: 'Restaurant',
  },
];

export const EditExpenseScreen: React.FC = () => {
  const {
    params: { id },
  } = useRoute<RouteProp<RootStackParamList, NAVIGATION_KEYS.EDIT_EXPENSE>>();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const expenseToEdit = expenses.find((expense) => expense.id === id);

  const handleSubmit = (data: ExpenseFormValues) => {
    console.log('Updated expense:', data);
  };

  const handleDelete = () => {
    navigation.goBack();
  };

  return (
    <Layout isScrollable={false}>
      <Header title="Edit Expense" showBackButton showDeleteIcon onDeletePress={handleDelete}/>
      {expenseToEdit ? (
        <ExpenseForm
          initialValues={expenseToEdit}
          onSubmit={handleSubmit}
          submitButtonText="Save"
        />
      ) : (
        <Text>Expense not found</Text>
      )}
    </Layout>
  );
};
