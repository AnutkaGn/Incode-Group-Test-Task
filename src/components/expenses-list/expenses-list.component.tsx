import { FlatList } from 'react-native';
import { Expense } from '../../types/expense.types';
import { ExpenseItem } from './expense-item/expense-item.component';
import { styles } from './expenses-list.styles';

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
    category: 'Beverages',
  },
  {
    id: '3',
    date: new Date(2025, 2, 19, 19, 45),
    amount: 200,
    title: 'Dinner',
    category: 'Restaurant',
  },
];

export const ExpenseList: React.FC = () => {
    return (
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExpenseItem expense={item} />}
        contentContainerStyle={styles.list_container}
      />
    );
};
